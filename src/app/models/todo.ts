
export type Todo = {
  id: Todo.Id
  title: string
  body: string
  state: Todo.Status
}

export module Todo {
  export declare type Id = number
  
  export const Status = {
    WAITING  : 0, // None
    IN_PROGRESS  : 1, // Male
    COMPLETED: 2  // Female
  } as const

  export type Status = typeof status[keyof typeof status]
}