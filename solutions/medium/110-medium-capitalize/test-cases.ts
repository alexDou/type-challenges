import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyCapitalize_S<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize_S<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize_S<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize_S<''>, ''>>,
  Expect<Equal<MyCapitalize_S<'a'>, 'A'>>,
  Expect<Equal<MyCapitalize_S<'b'>, 'B'>>,
  Expect<Equal<MyCapitalize_S<'c'>, 'C'>>,
  Expect<Equal<MyCapitalize_S<'d'>, 'D'>>,
  Expect<Equal<MyCapitalize_S<'e'>, 'E'>>,
  Expect<Equal<MyCapitalize_S<'f'>, 'F'>>,
  Expect<Equal<MyCapitalize_S<'g'>, 'G'>>,
  Expect<Equal<MyCapitalize_S<'h'>, 'H'>>,
  Expect<Equal<MyCapitalize_S<'i'>, 'I'>>,
  Expect<Equal<MyCapitalize_S<'j'>, 'J'>>,
  Expect<Equal<MyCapitalize_S<'k'>, 'K'>>,
  Expect<Equal<MyCapitalize_S<'l'>, 'L'>>,
  Expect<Equal<MyCapitalize_S<'m'>, 'M'>>,
  Expect<Equal<MyCapitalize_S<'n'>, 'N'>>,
  Expect<Equal<MyCapitalize_S<'o'>, 'O'>>,
  Expect<Equal<MyCapitalize_S<'p'>, 'P'>>,
  Expect<Equal<MyCapitalize_S<'q'>, 'Q'>>,
  Expect<Equal<MyCapitalize_S<'r'>, 'R'>>,
  Expect<Equal<MyCapitalize_S<'s'>, 'S'>>,
  Expect<Equal<MyCapitalize_S<'t'>, 'T'>>,
  Expect<Equal<MyCapitalize_S<'u'>, 'U'>>,
  Expect<Equal<MyCapitalize_S<'v'>, 'V'>>,
  Expect<Equal<MyCapitalize_S<'w'>, 'W'>>,
  Expect<Equal<MyCapitalize_S<'x'>, 'X'>>,
  Expect<Equal<MyCapitalize_S<'y'>, 'Y'>>,
  Expect<Equal<MyCapitalize_S<'z'>, 'Z'>>,
]
