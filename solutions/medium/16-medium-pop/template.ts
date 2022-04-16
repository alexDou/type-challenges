type Pop_S<T extends any[]> = T extends [...(infer Head), any] ? Head : never
