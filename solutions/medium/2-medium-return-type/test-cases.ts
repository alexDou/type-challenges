import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType_S<() => string>>>,
  Expect<Equal<123, MyReturnType_S<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType_S<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType_S<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType_S<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType_S<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType_S<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
// @ts-ignore
const fn1 = (v: boolean, w: any) => v ? 1 : 2
