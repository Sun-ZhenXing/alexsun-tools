<script setup lang="ts">
defineProps<{
  themes: string[]
  dropdownClasses?: string
  btnClasses?: string
  contentClasses?: string
}>()

const { t } = useI18n({ useScope: 'local' })
const colorMode = useColorMode()
</script>

<template>
  <div title="Change Theme" class="dropdown dropdown-end" :class="dropdownClasses">
    <div tabindex="0" class="btn" :class="btnClasses">
      <svg
        width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        class="size-5 stroke-current md:hidden"
      >
        <path
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
      <span class="hidden font-normal md:inline">{{ t('change_theme_btn') }}</span>
      <svg
        width="12px" height="12px" class="hidden size-2 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
      </svg>
    </div>
    <div
      class="dropdown-content z-30 mt-4 h-[70vh] max-h-96 w-56 overflow-y-auto rounded-box bg-base-200 text-base-content shadow"
      :class="contentClasses"
    >
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <template v-for="theme in themes" :key="theme">
          <button class="overflow-hidden rounded-lg text-left outline-base-content">
            <span
              :data-theme="theme" class="block w-full cursor-pointer bg-base-100 font-sans text-base-content"
              @click="colorMode.preference = theme"
            >
              <span class="grid grid-cols-5 grid-rows-3">
                <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    class="size-3 shrink-0" :class="{ invisible: colorMode.preference !== theme }"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <span class="grow text-sm">
                    {{ t(theme) }}
                  </span>
                  <span class="flex h-full shrink-0 flex-wrap gap-1">
                    <span class="w-2 rounded bg-primary" />
                    <span class="w-2 rounded bg-secondary" />
                    <span class="w-2 rounded bg-accent" />
                    <span class="w-2 rounded bg-neutral" />
                  </span>
                </span>
              </span>
            </span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  system: System
  light: Light
  dark: Dark
  cupcake: Cupcake
  bumblebee: Bumblebee
  emerald: Emerald
  corporate: Corporate
  synthwave: Synthwave
  retro: Retro
  cyberpunk: Cyberpunk
  valentine: Valentine
  halloween: Halloween
  garden: Garden
  forest: Forest
  aqua: Aqua
  lofi: Lo-Fi
  pastel: Pastel
  fantasy: Fantasy
  wireframe: Wireframe
  black: Black
  luxury: Luxury
  dracula: Dracula
  cmyk: Cmyk
  autumn: Autumn
  business: Business
  acid: Acid
  lemonade: Lemonade
  night: Night
  coffee: Coffee
  winter: Winter
  dim: Dim
  nord: Nord
  sunset: Sunset
  change_theme_btn: Theme
zh:
  system: 系统
  light: 明亮
  dark: 黑暗
  cupcake: 纸杯蛋糕
  bumblebee: 熊蜂
  emerald: 翡翠
  corporate: 公司
  synthwave: 合成波
  retro: 复古
  cyberpunk: 赛博朋克
  valentine: 情人
  halloween: 万圣节前夕
  garden: 花园
  forest: 森林
  aqua: 水
  lofi: Lo-Fi
  pastel: 淡色
  fantasy: 幻想
  wireframe: 线框
  black: 黑色
  luxury: 奢侈
  dracula: 德拉库拉
  cmyk: CMYK
  autumn: 秋天
  business: 商业
  acid: 酸性
  lemonade: 柠檬水
  night: 夜
  coffee: 咖啡
  winter: 冬天
  dim: 暗淡
  nord: 北欧
  sunset: 日落
  change_theme_btn: 主题
tw:
  system: 系統
  light: 明亮
  dark: 黑暗
  cupcake: 紙杯蛋糕
  bumblebee: 熊蜂
  emerald: 翡翠
  corporate: 公司
  synthwave: 合成波
  retro: 復古
  cyberpunk: 賽博朋克
  valentine: 情人
  halloween: 萬聖節前夕
  garden: 花園
  forest: 森林
  aqua: 水
  lofi: Lo-Fi
  pastel: 淡色
  fantasy: 幻想
  wireframe: 線框
  black: 黑色
  luxury: 奢侈
  dracula: 德拉庫拉
  cmyk: CMYK
  autumn: 秋天
  business: 商業
  acid: 酸性
  lemonade: 檸檬水
  night: 夜
  coffee: 咖啡
  winter: 冬天
  dim: 暗淡
  nord: 北歐
  sunset: 日落
  change_theme_btn: 主題
ja:
  system: システム
  light: 明るい
  dark: 暗い
  cupcake: 紙コップケーキ
  bumblebee: 熊蜂
  emerald: エメラルド
  corporate: 会社の
  synthwave: ごうせいは
  retro: レトロ
  cyberpunk: サイボパンク
  valentine: 恋人
  halloween: ハロウィンを前に
  garden: ガーデン
  forest: 森林
  aqua: 水
  lofi: Lo-Fi
  pastel: 薄い
  fantasy: 幻想
  wireframe: ワイヤフレーム
  black: ブラック
  luxury: ぜいたく
  dracula: ドラキュラ
  cmyk: CMYK
  autumn: 秋
  business: ビジネス
  acid: すっぱい
  lemonade: レモネード
  night: 夜
  coffee: コーヒー
  winter: 冬
  dim: 暗い
  nord: ノルド
  sunset: 日没
  change_theme_btn: テーマ
</i18n>
