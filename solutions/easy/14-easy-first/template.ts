type First_S<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
// type First_S<T extends any[]> = T["length"] extends 0 ? never : T[0];