type DeepReadonly_S<T> = {
  readonly [k in keyof T]: T[k] extends Record<string|number|symbol, unknown>
    ? DeepReadonly_S<T[k]>
    : T[k] extends any[]
      ? DeepReadonly_S<T[k]>
      : T[k]
}
