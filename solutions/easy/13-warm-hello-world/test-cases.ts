import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld_S>>,
  Expect<Equal<HelloWorld_S, string>>
]
