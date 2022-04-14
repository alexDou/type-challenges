import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick_S<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick_S<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick_S<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
