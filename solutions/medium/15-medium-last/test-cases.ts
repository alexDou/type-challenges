import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last_S<[3, 2, 1]>, 1>>,
  Expect<Equal<Last_S<[() => 123, { a: string }]>, { a: string }>>,
]
