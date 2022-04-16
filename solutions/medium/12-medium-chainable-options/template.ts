type Chainable_S<T extends Record<string, unknown> = {}> = {
  option<K extends string|number|symbol, V>(key: K extends keyof T ? never : K, value: V): Chainable_S<T & Record<K, V>>
  get(): T
}
