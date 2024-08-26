<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'

import { JSONPath } from 'jsonpath-plus'

const tabLength = ref<number | string>(2)
const path = ref('$.')
const value = ref('{}')
const result = ref('')

const dark = useDark()
const colorMode = useColorMode()

const isDark = computed<boolean>(() => colorMode.value === 'dark' || colorMode.preference === 'system' && dark.value)

const editorLeft = shallowRef<MonacoEditor.IStandaloneDiffEditor | null>(null)
const editorRight = shallowRef<MonacoEditor.IStandaloneDiffEditor | null>(null)

const options = computed<MonacoEditor.IStandaloneEditorConstructionOptions>(() => {
  return {
    minimap: { enabled: true },
    theme: isDark.value ? 'vs-dark' : 'vs-light',
    originalEditable: true,
  }
})

function update() {
  try {
    const json = JSON.parse(value.value)
    const r = JSONPath({ path: path.value, json })
    result.value = JSON.stringify(r, null, tabLength.value)
  }
  catch (e: any) {
    result.value = e.message
  }
}

// @ts-expect-error environment variable injected by Vite
if (!import.meta.env.SSR) {
  useResizeObserver(window.document.body, () => {
    setTimeout(() => {
      editorLeft.value?.layout()
      editorRight.value?.layout()
    })
  })
}

function setEditorLeft(e: MonacoEditor.IStandaloneDiffEditor) {
  editorLeft.value = e
}

function setEditorRight(e: MonacoEditor.IStandaloneDiffEditor) {
  editorRight.value = e
}

watch(() => [value.value, path.value, tabLength.value], update, { immediate: true })
</script>

<template>
  <div class="flex h-full flex-col bg-base-200">
    <div class="flex w-full flex-row items-center">
      <label class="form-control m-4 w-full max-w-xs">
        <div class="label">
          <span class="label-text">JSONPath</span>
        </div>
        <input v-model="path" type="text" class="input input-bordered input-primary w-full max-w-xs font-mono">
      </label>
      <label class="form-control m-4 w-full max-w-xs">
        <div class="label">
          <span class="label-text">Space</span>
        </div>
        <select v-model="tabLength" class="select select-bordered w-full max-w-xs">
          <option selected :value="2">2</option>
          <option :value="4">4</option>
          <option :value="8">8</option>
          <option :value="`\t` + ''">Tab</option>
        </select>
      </label>
    </div>
    <div class="flex grow">
      <MonacoEditor v-model="value" lang="json" class="h-full w-1/2" :options="options" @load="setEditorLeft" />
      <MonacoEditor v-model="result" lang="json" class="h-full w-1/2" :options="options" @load="setEditorRight" />
    </div>
  </div>
</template>
