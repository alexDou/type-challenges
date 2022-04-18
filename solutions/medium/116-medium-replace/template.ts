type Replace_S<
  S extends string,
  From extends string,
  To extends string
  > = From extends ''
    ? S
    : S extends `${infer S1}${From}${infer S2}`
      ? `${S1}${To}${S2}`
      : S extends `${From}${infer S2}`
        ? `${To}${S2}`
        : S extends `${infer S1}${From}`
          ? `${S1}${To}`
          : S
