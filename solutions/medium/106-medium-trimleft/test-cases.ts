import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft_S<'str'>, 'str'>>,
  Expect<Equal<TrimLeft_S<' str'>, 'str'>>,
  Expect<Equal<TrimLeft_S<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft_S<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft_S<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft_S<''>, ''>>,
  Expect<Equal<TrimLeft_S<' \n\t'>, ''>>,
]
