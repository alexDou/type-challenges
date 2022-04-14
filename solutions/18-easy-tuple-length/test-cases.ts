import { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
  Expect<Equal<Length_S<typeof tesla>, 4>>,
  Expect<Equal<Length_S<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length_S<5>,
  // @ts-expect-error
  Length_S<'hello world'>,
]
