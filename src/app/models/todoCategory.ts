
export type TodoCategory = {
  id: TodoCategory.Id
  name: string,
  slug: string,
  color: TodoCategory.Color
}

export module TodoCategory {
  export declare type Id = number

  export const Color = {
    RED: 0, 
    GREEN: 1,
    BLUE: 2
  } as const

  export type Color = typeof status[keyof typeof status]
}