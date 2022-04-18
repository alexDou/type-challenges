type ReplaceAll_S<
  S extends string,
  From extends string,
  To extends string
  > = From extends ''
    ? S
    : S extends `${infer S1}${From}${infer S2}`
      ? `${S1}${To}${ReplaceAll_S<S2, From, To>}`
      : S extends `${infer S1}${From}`
        ? `${ReplaceAll_S<S1, From, To>}${To}`
        : S extends `${From}${infer S2}`
          ? `${ReplaceAll_S<To, From, To>}${S2}`
          : S
