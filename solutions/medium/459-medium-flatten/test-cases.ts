import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten_S<[]>, []>>,
  Expect<Equal<Flatten_S<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten_S<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten_S<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten_S<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar']>>,
]
