// ?? no solution
type Permutation_S<T> = [T] extends [never]
  ? []
  : T extends T
    ? [T]
    : T extends infer U
      ? [U, U, U] // ??
      : never


