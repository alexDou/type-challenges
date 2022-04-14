import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Includes_S<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes_S<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes_S<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes_S<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes_S<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes_S<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes_S<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes_S<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes_S<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes_S<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes_S<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes_S<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes_S<[1], 1 | 2>, false>>,
  Expect<Equal<Includes_S<[1 | 2], 1>, false>>,
  Expect<Equal<Includes_S<[null], undefined>, false>>,
  Expect<Equal<Includes_S<[undefined], null>, false>>,
]
