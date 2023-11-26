<script setup lang="ts">
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
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
