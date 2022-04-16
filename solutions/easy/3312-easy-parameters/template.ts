type MyParameters_S<T extends (...args: any[]) => any> = T extends
  (...args: infer ARGS) => any ? ARGS : never
