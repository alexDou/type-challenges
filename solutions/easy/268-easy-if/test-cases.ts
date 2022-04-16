import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If_S<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If_S<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If_S<null, 'a', 'b'>
