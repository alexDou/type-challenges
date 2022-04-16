type AllValues<T extends unknown[], U extends any[] = []> = T extends [infer F, ...(infer R)]
  ? AllValues<R, [...U, F extends Promise<infer P> ? P : F]>
  : U;

declare function PromiseAll_S<T extends unknown[]>(values: readonly [...T]): Promise<AllValues<T>>