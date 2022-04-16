type MyPick_S<T, K extends keyof T> = {
  [k in K]: T[k]
}
