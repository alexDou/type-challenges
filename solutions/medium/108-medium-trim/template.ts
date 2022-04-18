type Trim_S<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}${" " | "\n" | "\t"}`
  ? Trim_S<R>
  : S extends `${" " | "\n" | "\t"}${infer R}`
    ? Trim_S<R>
    : S extends `${infer R}${" " | "\n" | "\t"}`
      ? Trim_S<R>
      : S
