type MyAwaited_S<P extends Promise<any>> =
  P extends Promise<infer T>
    ? T extends Promise<any>
      ? MyAwaited_S<T>
      : T
        : never