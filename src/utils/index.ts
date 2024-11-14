export const debounceFn = (fn: Function, delay: number = 500) => {
  let idTimer: NodeJS.Timeout

  return (...args: Array<unknown>) => {
    clearTimeout(idTimer)
    idTimer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}

export const removeEmptyValues = <T extends Record<string, number | string | boolean | unknown>>(
  object: T
) => {
  return Object.fromEntries(Object.entries(object).filter(([_, value]) => value))
}

export const createQueryString = <T extends Record<string, number | string | boolean | undefined>>(
  queryParams: T
): string | undefined => {
  if (!queryParams) return
  if (!Object.keys(queryParams).length) return

  const queryParamsOnlyWithValues = removeEmptyValues(queryParams)
  const params = new URLSearchParams()

  Object.entries(queryParamsOnlyWithValues).forEach(([key, value]) => {
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
