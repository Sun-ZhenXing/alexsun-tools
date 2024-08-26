export function updateDayjsI18n() {
  const dayjs = useDayjs()
  const { locale } = useI18n()
  const isoCode = {
    en: 'en',
    ja: 'ja',
    zh: 'zh-cn',
    tw: 'zh-tw',
  }[locale.value]
  if (isoCode) {
    dayjs.locale(isoCode)
  }
}
