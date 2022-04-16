type Last_S<T extends any[]> = T extends [...any, infer Tail] ? Tail : never
