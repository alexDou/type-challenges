type MyOmit_S<T extends Record<string, any>, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: T[k]
}
