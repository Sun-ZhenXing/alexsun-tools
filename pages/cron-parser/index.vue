<script setup lang="ts">
import { parseExpression } from 'cron-parser'

const { t } = useI18n({ useScope: 'local' })
const cron = ref('* * * * * *')
const nextList = ref<string[]>([])
const dayjs = useDayjs()

watch(cron, (value) => {
  try {
    const interval = parseExpression(value)
    nextList.value = []
    for (let i = 0; i < 5; i++) {
      nextList.value.push(dayjs(interval.next().toDate()).format('YYYY-MM-DD HH:mm:ss'))
    }
  }
  catch (error) {
    nextList.value = []
    console.error(error)
  }
}, { immediate: true })
</script>

<template>
  <div class="flex h-full min-h-48 flex-col items-center justify-center">
    <input v-model="cron" :placeholder="t('input_cron')" class="input input-bordered input-primary w-full max-w-xs">
    <ul v-if="nextList.length !== 0" class="steps steps-vertical">
      <li v-for="item in nextList" :key="item" class="step step-primary">
        {{ item }}
      </li>
    </ul>
    <div v-else class="p-8">
      <div class="alert alert-error">
        {{ t('invalid_cron') }}
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  input_cron: Input Cron Expression
  invalid_cron: Invalid Cron Expression
zh:
  input_cron: 输入 Cron 表达式
  invalid_cron: 无效的 Cron 表达式
tw:
  input_cron: 輸入 Cron 表達式
  invalid_cron: 無效的 Cron 表達式
ja:
  input_cron: Cron 式を入力
  invalid_cron: 無効な Cron 式
</i18n>
