<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode'

const img = ref<HTMLImageElement | null>(null)
const { t } = useI18n({ useScope: 'local' })

const text = ref('text-to-encode')

const qrcode = useQRCode(text)

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
        <img ref="img" :src="qrcode">
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ t('title') }}
        </h2>
        <p>
          <input
            v-model="text"
            type="text"
            class="input input-bordered input-primary w-full max-w-xs"
          >
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
  title: QR Code
  download: Download
zh:
  title: 二维码
  download: 下载
tw:
  title: 二維碼
  download: 下載
ja:
  title: QRコード
  download: ダウンロード
</i18n>
