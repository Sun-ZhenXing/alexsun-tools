<script setup lang="ts">
import LogoSvg from '~/assets/images/2-1000-min.svg'

const img = ref<HTMLImageElement | null>(null)
const { t } = useI18n({ useScope: 'local' })

if (!import.meta.env.SSR) {
  useEventListener(document, 'paste', (event) => {
    const items = event.clipboardData?.items
    if (!items) {
      return
    }
    for (const item of items) {
      if (!item.type.includes('image')) {
        continue
      }
      const blob = item.getAsFile()
      if (!blob) {
        continue
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        if (!img.value) {
          return
        }
        img.value.src = event.target?.result as string
      }
      reader.readAsDataURL(blob)
    }
  })
}

function download() {
  if (!img.value || !img.value.src || !img.value.src.startsWith('data:')) {
    return
  }
  const link = document.createElement('a')
  link.href = img.value.src
  link.download = 'image.png'
  link.click()
}
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img ref="img" :src="LogoSvg" alt="Demo">
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ t('title') }}
        </h2>
        <p>{{ t('description') }}</p>
        <p>
          <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">V</kbd> |
          <kbd class="kbd kbd-sm">⌘</kbd> + <kbd class="kbd kbd-sm">V</kbd>
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="download">
            {{ t('download') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Paste Image
  description: Paste image from clipboard
  download: Download
zh:
  title: 粘贴图片
  description: 从剪贴板粘贴图片
  download: 下载
tw:
  title: 粘貼圖片
  description: 從剪貼簿粘貼圖片
  download: 下載
ja:
  title: 画像を貼り付ける
  description: クリップボードから画像を貼り付ける
  download: ダウンロード
</i18n>
