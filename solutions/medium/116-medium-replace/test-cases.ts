import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace_S<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace_S<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace_S<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace_S<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace_S<'', '', ''>, ''>>,
]
