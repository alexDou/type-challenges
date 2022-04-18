type LengthOfString_S<S extends string, A extends string[] = []> = S extends `${infer F}${infer R}`
  ? LengthOfString_S<R, [F, ...A]>
  : A['length']
