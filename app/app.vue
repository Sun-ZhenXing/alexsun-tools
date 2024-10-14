<script setup lang="ts">
const locale = useGlobalLocale()
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Alex toolbox` : 'Alex toolbox'
  },
  meta: [
    {
      name: 'description',
      content: 'Alex toolbox',
    },
  ],
})

onMounted(() => {
  updateDayjsI18n(locale.value)
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :duration="300" color="oklch(var(--p)/0.5)" class="shadow-primary" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
