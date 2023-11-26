<script setup lang="ts">
import tailwindConfig from '~/tailwind.config'

const { setLocale } = useI18n()
</script>

<template>
  <div class="navbar h-[4rem] bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          <li>
            <NuxtLink to="/">
              {{ $t('homePage') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/diff">
              {{ $t('diffTool') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/paste-image">
              {{ $t('pasteImage.title') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        {{ $t('appName') }}
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <Icon name="fluent:local-language-zi-24-regular" size="24" />
        </label>
        <ul tabindex="0" class="menu dropdown-content z-30 mt-4 w-52 rounded-box bg-base-100 p-2 shadow">
          <li><a @click="setLocale('en_US')">English (US)</a></li>
          <li><a @click="setLocale('zh_CN')">简体中文</a></li>
          <li><a @click="setLocale('ja_JP')">日本語</a></li>
        </ul>
      </div>
      <AppTheme :themes="tailwindConfig.daisyui.themes" />
    </div>
  </div>
</template>
