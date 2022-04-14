type MyReadonly_S<T> = {
  readonly [k in keyof T]: T[k] extends {[sk: string]: any}
    ? MyReadonly<T[k]> : T[k]
}
