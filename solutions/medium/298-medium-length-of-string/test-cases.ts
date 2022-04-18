import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString_S<''>, 0>>,
  Expect<Equal<LengthOfString_S<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString_S<'reina'>, 5>>,
  Expect<Equal<LengthOfString_S<'Sound! Euphonium'>, 16>>,
]
