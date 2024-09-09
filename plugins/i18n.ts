import 'dayjs/locale/zh-cn'
import 'dayjs/locale/ja'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/en'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('i18n:localeSwitched', ({ newLocale }) => {
    updateDayjsI18n(newLocale)
  })
})
