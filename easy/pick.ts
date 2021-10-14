type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// type T1 = MyPick<Todo, 'title'>

type T2 = 'A' & 'B' & 'C';


type A = Promise<{name: 'name', error: -1}>;
type ReturnPromise<T> = T extends Promise<infer U> ? U : never;
type T1 = ReturnPromise<A>; // string

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
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
