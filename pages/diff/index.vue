<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'

const language = ref('text')
const isInlineView = ref(false)
const editor = shallowRef<MonacoEditor.IStandaloneDiffEditor | null>(null)
const { t } = useI18n()

useHead({
  title: t('diffTool'),
})

const options = computed<MonacoEditor.IStandaloneDiffEditorConstructionOptions>(() => {
  return {
    minimap: { enabled: true },
    theme: 'vs-dark',
    renderSideBySide: !isInlineView.value,
    originalEditable: true,
  }
})

if (!import.meta.env.SSR) {
  useResizeObserver(window.document.body, () => {
    editor.value?.layout()
  })
}

function setEditor(e: MonacoEditor.IStandaloneDiffEditor) {
  editor.value = e
}
</script>

<template>
  <div class="flex h-full flex-col bg-base-200">
    <div class="flex flex-row items-center">
      <div class="dropdown p-2">
        <label tabindex="0" class="btn-rounded btn m-1 bg-base-300">{{ $t('settings') }}</label>
        <ul tabindex="0" class="dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          <li>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">{{ $t('language') }}</span>
              </label>
              <select v-model="language" class="select select-primary w-full max-w-xs">
                <option disabled selected>
                  {{ $t('language') }}
                </option>
                <option v-for="item in MONACO_LANGUAGES" :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text m-1">{{ $t('showInline') }}</span>
          <input v-model="isInlineView" type="checkbox" class="toggle toggle-secondary">
        </label>
      </div>
    </div>
    <MonacoDiffEditor :lang="language" :options="options" class="h-full w-full" @load="setEditor" />
  </div>
</template>
