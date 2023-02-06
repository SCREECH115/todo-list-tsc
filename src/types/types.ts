export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

export type Category = "General" | "Work" | "Gym" | "Hobby";
