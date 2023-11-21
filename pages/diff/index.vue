<script setup lang="ts">
import type * as Monaco from 'monaco-editor'

const language = ref('text')
const isInlineView = ref(false)
const editor = ref<Monaco.editor.IStandaloneDiffEditor | null>(null)

const options = computed<Monaco.editor.IStandaloneDiffEditorConstructionOptions>(() => {
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

function setEditor(e: Monaco.editor.IStandaloneDiffEditor) {
  editor.value = e
}
</script>

<template>
  <div class="flex h-[calc(100%-4rem)] flex-col">
    <div class="dropdown p-2">
      <label tabindex="0" class="btn m-1">{{ $t('settings') }}</label>
      <ul tabindex="0" class="dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{{ $t('showInline') }}</span>
              <input v-model="isInlineView" type="checkbox" class="toggle toggle-secondary">
            </label>
          </div>
        </li>
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
    <MonacoDiffEditor :lang="language" :options="options" class="h-full w-full" @load="setEditor" />
  </div>
</template>
