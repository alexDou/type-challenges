// type MyExclude_S<T extends unknown, U extends unknown> = U extends (infer E)
//   ? Exclude<T, E>
//   : never;


type MyExclude_S<T extends unknown, U extends unknown> = T extends U ? never : T;