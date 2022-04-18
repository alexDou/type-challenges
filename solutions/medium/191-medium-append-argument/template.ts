type AppendArgument_S<
  Fn extends (...args: any[]) => unknown,
  A
  > = Fn extends (...args: infer Args) => infer Rt
  ? (...args: [...Args, A]) => Rt
  : Fn
