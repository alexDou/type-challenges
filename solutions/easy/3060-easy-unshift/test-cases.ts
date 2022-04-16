import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift_S<[], 1>, [1]>>,
  Expect<Equal<Unshift_S<[1, 2], 0>, [0, 1, 2,]>>,
  Expect<Equal<Unshift_S<['1', 2, '3'],boolean>, [boolean, '1', 2, '3']>>,
]
