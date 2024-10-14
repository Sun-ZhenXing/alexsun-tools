export function useGlobalLocale() {
  return useState(() => {
    const { locale } = useI18n()
    return locale.value
  })
}

export function updateDayjsI18n(locale: string) {
  const dayjs = useDayjs()
  const isoCode = {
    en: 'en',
    ja: 'ja',
    zh: 'zh-cn',
    tw: 'zh-tw',
  }[locale]
  if (isoCode) {
    dayjs.locale(isoCode)
  }
}
