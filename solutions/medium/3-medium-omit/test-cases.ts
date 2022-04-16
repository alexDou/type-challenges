import { Equal, Expect } from '@type-challenges/utils'

const tt: MyOmit_S<Todo, 'description'> = {
  title: 'string',
  completed: false
}

type cases = [
  Expect<Equal<Expected1, MyOmit_S<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit_S<Todo, 'description' | 'completed'>>>
]

// @ts-expect-error
type error = MyOmit_S<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
