<script setup lang="ts">
defineProps<{
  themes: string[]
  dropdownClasses?: string
  btnClasses?: string
  contentClasses?: string
}>()
const colorMode = useColorMode()
</script>

<template>
  <div title="Change Theme" class="dropdown dropdown-end" :class="dropdownClasses">
    <div tabindex="0" class="btn" :class="btnClasses">
      <svg
        width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        class="h-5 w-5 stroke-current md:hidden"
      >
        <path
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
      <span class="hidden font-normal md:inline">{{ $t('changeThemeBtn') }}</span>
      <svg
        width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
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
                    class="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <span class="flex-grow text-sm">
                    {{ theme }}
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
