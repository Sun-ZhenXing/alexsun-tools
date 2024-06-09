<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'
import tailwindConfig from '~/tailwind.config'

const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)
})

const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <div class="navbar h-16 bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          <li>
            <NuxtLink :to="localePath('/')">
              {{ t('home_page') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/diff')">
              {{ t('diff_tool') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/paste-image')">
              {{ t('paste_image') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/ieee754')">
              IEEE 754
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <NuxtLink :to="localePath('/')" class="btn btn-ghost text-xl">
        {{ t('app_name') }}
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <Icon name="fluent:local-language-zi-24-regular" size="24" />
        </label>
        <ul tabindex="0" class="menu dropdown-content z-30 mt-4 w-52 rounded-box bg-base-100 p-2 shadow">
          <li v-for="l in availableLocales" :key="l.code">
            <NuxtLink :to="switchLocalePath(l.code)">
              {{ l.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <AppTheme :themes="tailwindConfig.daisyui.themes" />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  test: Test
  app_name: Yali Tools
  home_page: Home Page
  diff_tool: Diff Tool
  paste_image: Paste Image
zh:
  test: 测试
  app_name: 鸭梨工具包
  home_page: 首页
  diff_tool: 差异对比
  paste_image: 粘贴图片
tw:
  test: 測試
  app_name: 鴨梨工具包
  home_page: 首頁
  diff_tool: 差異對比
  paste_image: 粘貼圖片
ja:
  test: テスト
  app_name: ヤリツール
  home_page: ホームページ
  diff_tool: 差分ツール
  paste_image: 画像を貼り付ける
</i18n>
