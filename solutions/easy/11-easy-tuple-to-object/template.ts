type TupleToObject_S<T extends readonly string[]> = {
  [K in T[number]]: K
}
