type Flatten_S<T extends unknown[], A extends unknown[] = []> =
  T extends [[...infer F], ...infer R]
    ? Flatten_S<[...F, ...R], A>
    : T extends [infer F, ...infer R]
      ? Flatten_S<R, [...A, F]>
      : A
