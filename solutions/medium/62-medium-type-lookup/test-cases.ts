import { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type Tt = LookUp_S<Animal, 'dog'>

type cases = [
  Expect<Equal<LookUp_S5<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp_S5<Animal, 'cat'>, Cat>>,
]
