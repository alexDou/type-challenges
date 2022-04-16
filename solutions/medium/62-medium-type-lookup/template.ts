type LookUp_S<U extends {type: string}, T extends string> = T extends {type: T} ? U : never

// magic
type LookUp_S5<U extends object, T extends string> = U extends U
  ? U[keyof U] extends string
    ? Lowercase<T> extends Lowercase<U[keyof U]>
      ? U
      : never
    : never
  : never;