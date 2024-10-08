<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'
import { MONACO_LANGUAGES } from '~/utils/settings'

const language = ref('text')
const isInlineView = ref(false)
const editor = shallowRef<MonacoEditor.IStandaloneDiffEditor | null>(null)
const { t } = useI18n({ useScope: 'local' })

const dark = useDark()
const colorMode = useColorMode()

const isDark = computed<boolean>(() => colorMode.value === 'dark' || colorMode.preference === 'system' && dark.value)

const options = computed<MonacoEditor.IStandaloneDiffEditorConstructionOptions>(() => {
  return {
    minimap: { enabled: true },
    theme: isDark.value ? 'vs-dark' : 'vs-light',
    renderSideBySide: !isInlineView.value,
    originalEditable: true,
  }
})

// @ts-expect-error environment variable injected by Vite
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
      <div class="form-control w-full max-w-xs p-2">
        <label class="label">
          <span class="label-text">{{ t('language') }}</span>
        </label>
        <select v-model="language" class="select select-primary w-full max-w-xs">
          <option disabled selected>
            {{ t('language') }}
          </option>
          <option v-for="item in MONACO_LANGUAGES" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form-control p-2">
        <label class="label cursor-pointer">
          <span class="label-text m-1">{{ t('show_inline') }}</span>
          <input v-model="isInlineView" type="checkbox" class="toggle toggle-secondary">
        </label>
      </div>
    </div>
    <MonacoDiffEditor :lang="language" :options="options" class="size-full" @load="setEditor">
      {{ t('loading') }}
    </MonacoDiffEditor>
  </div>
</template>

<i18n lang="yaml">
en:
  settings: Settings
  language: Language
  show_inline: Show Inline
  loading: Loading...
zh:
  settings: 设置
  language: 语言
  show_inline: 内联显示
  loading: 加载中...
tw:
  settings: 設置
  language: 語言
  show_inline: 內聯顯示
  loading: 載入中...
ja:
  settings: 設定
  language: 言語
  show_inline: インライン表示
  loading: ロード中...
</i18n>
