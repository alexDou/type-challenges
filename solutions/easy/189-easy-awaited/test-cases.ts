import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited_S<X>, string>>,
  Expect<Equal<MyAwaited_S<Y>, { field: number }>>,
  Expect<Equal<MyAwaited_S<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
