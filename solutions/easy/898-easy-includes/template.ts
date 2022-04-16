type IsEq<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2)
  ? true
  : false;
type Includes_S<T extends readonly any[], U extends unknown> = T extends [infer F, ...(infer R)]
  ? IsEq<F, U> extends true ? true : Includes_S<R, U> : false;
