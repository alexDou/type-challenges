import { Equal, Expect } from '@type-challenges/utils'

const tObj: MyReadonly_S<Todo1> = {
  title: 't',
  description: 'string',
  completed: true,
  meta: {
    author: 'a'
  }
};
// @ts-expect-error
tObj.meta.author = 'b';

type cases = [
  // @ts-expect-error
  Expect<Equal<MyReadonly_S<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}