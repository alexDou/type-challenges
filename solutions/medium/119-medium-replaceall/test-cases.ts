import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll_S<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll_S<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll_S<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll_S<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll_S<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll_S<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll_S<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll_S<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll_S<'', '', ''>, ''>>,
]
