type AppendToObject_S<T extends Record<string|number|symbol, unknown>, U extends string, V> =
  {
    [K in (keyof T) | U]: K extends keyof T ? T[K] : V
  }