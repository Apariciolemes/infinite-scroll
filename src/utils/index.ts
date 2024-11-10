export const createQueryString = <T extends Record<string, number | string | boolean | undefined>>(
  queryParams: T
): string | undefined => {
  if (!queryParams) return
  if (!Object.keys(queryParams).length) return

  const params = new URLSearchParams()

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (typeof value === 'object') {
        params.append(key, JSON.stringify(value))
      } else {
        params.append(key, String(value))
      }
    }
  })

  return params.toString()
}
