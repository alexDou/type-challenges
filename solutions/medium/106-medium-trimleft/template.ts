type TrimLeft_S<S extends string> = S extends `${" " | "\t" | "\n"}${infer R}`
  ? TrimLeft_S<R>
  : S
