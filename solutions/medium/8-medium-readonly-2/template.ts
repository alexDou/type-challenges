type MyReadonly2_S<T, K extends keyof T = never> = [K] extends [never]
  ? Readonly<T>
  : Omit<T, K> & Readonly<Pick<T, K>>
