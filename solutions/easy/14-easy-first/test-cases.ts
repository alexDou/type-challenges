import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First_S<[3, 2, 1]>, 3>>,
  Expect<Equal<First_S<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First_S<[]>, never>>,
  Expect<Equal<First_S<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]
