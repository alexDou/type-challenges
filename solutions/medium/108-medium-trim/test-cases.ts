import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim_S<'str'>, 'str'>>,
  Expect<Equal<Trim_S<' str'>, 'str'>>,
  Expect<Equal<Trim_S<'     str'>, 'str'>>,
  Expect<Equal<Trim_S<'str   '>, 'str'>>,
  Expect<Equal<Trim_S<'     str     '>, 'str'>>,
  Expect<Equal<Trim_S<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim_S<''>, ''>>,
  Expect<Equal<Trim_S<' \n\t '>, ''>>,
]
