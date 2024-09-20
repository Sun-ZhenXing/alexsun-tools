<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'
import * as curlconverter from 'curlconverter'

const command = ref('curl -X POST -d "param1=value1&param2=value2" http://example.com')
const lang = ref('python')
const result = ref('')

const editorLeft = shallowRef<MonacoEditor.IStandaloneCodeEditor | null>(null)
const editorRight = shallowRef<MonacoEditor.IStandaloneCodeEditor | null>(null)

const dark = useDark()
const colorMode = useColorMode()

const isDark = computed<boolean>(() => colorMode.value === 'dark' || colorMode.preference === 'system' && dark.value)

// @ts-expect-error environment variable injected by Vite
if (!import.meta.env.SSR) {
  useResizeObserver(window.document.body, () => {
    setTimeout(() => {
      editorLeft.value?.layout()
      editorRight.value?.layout()
    })
  })
}

const options = computed<MonacoEditor.IStandaloneEditorConstructionOptions>(() => {
  return {
    minimap: { enabled: true },
    theme: isDark.value ? 'vs-dark' : 'vs-light',
    originalEditable: true,
  }
})

function setEditorLeft(e: MonacoEditor.IStandaloneCodeEditor) {
  editorLeft.value = e
}

function setEditorRight(e: MonacoEditor.IStandaloneCodeEditor) {
  editorRight.value = e
}

function update() {
  try {
    result.value = curlconverter.toPython(command.value)
  } catch (e: any) {
    console.error(e)
    result.value = e.message
  }
}

watch(() => [command.value, lang.value], update, { immediate: true })
</script>

<template>
  <div class="flex h-full flex-col overflow-hidden bg-base-200">
    <div class="flex h-32 w-full flex-row items-center">
      <label class="form-control m-4 w-full max-w-xs">
        <div class="label">
          <span class="label-text">Curl</span>
        </div>
        <input v-model="command" type="text" class="input input-bordered input-primary w-full max-w-xs font-mono">
      </label>
    </div>
    <div class="flex grow">
      <MonacoEditor
        v-model="command" lang="shell" class="h-[calc(100svh-12rem)] w-1/2" :options="options"
        @load="setEditorLeft"
      />
      <MonacoEditor
        v-model="result" :lang="lang" class="h-[calc(100svh-12rem)] w-1/2" :options="options"
        @load="setEditorRight"
      />
    </div>
  </div>
</template>
