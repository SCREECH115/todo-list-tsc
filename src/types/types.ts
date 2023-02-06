export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

export enum Category {
  GENERAL = "General",
  WORK = "Work",
  GYM = "Gym",
  HOBBY = "Hobby",
  SOCIAL = "Social",
}
