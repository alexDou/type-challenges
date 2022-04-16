import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop_S<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop_S<['a', 'b', 'c', 'd', ]>, ['a', 'b', 'c']>>,
]
