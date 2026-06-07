export const useLocale = () => {
  const route = useRoute()
  return computed(() => (route.path.startsWith('/en') ? 'en' : 'sr'))
}
