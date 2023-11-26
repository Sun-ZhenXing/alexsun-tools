<script setup lang="ts">
import LogoSvg from '~/assets/images/2-1000-min.svg'

const img = ref<HTMLImageElement | null>(null)
const { t } = useI18n()

useHead({
  title: t('pasteImage.title'),
})

if (!import.meta.env.SSR) {
  useEventListener(document, 'paste', (event) => {
    const items = event.clipboardData?.items
    if (!items)
      return
    for (const item of items) {
      if (!item.type.includes('image'))
        continue
      const blob = item.getAsFile()
      if (!blob)
        continue
      const reader = new FileReader()
      reader.onload = (event) => {
        if (!img.value)
          return
        img.value.src = event.target?.result as string
      }
      reader.readAsDataURL(blob)
    }
  })
}

function download() {
  if (!img.value || !img.value.src || !img.value.src.startsWith('data:'))
    return
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
          {{ $t('pasteImage.title') }}
        </h2>
        <p>{{ $t('pasteImage.description') }}</p>
        <p>
          <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">V</kbd> |
          <kbd class="kbd kbd-sm">⌘</kbd> + <kbd class="kbd kbd-sm">V</kbd>
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="download">
            {{ $t('pasteImage.downloadBtn') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
