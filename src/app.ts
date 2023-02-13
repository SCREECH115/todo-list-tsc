import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks-helper.js";
import { render as renderCategories } from "./helpers/render-categories-helper.js";
import { TaskClass } from "./classes/task.js";

const taskNameInputEl: HTMLInputElement = document.querySelector("#name");
const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const addBtnEl: HTMLButtonElement = document.querySelector("button");
const categoriesContainerEl: HTMLElement =
  document.querySelector(".categories");
let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
  Category.SOCIAL,
];

const tasks: Task[] = [
  new Task("Wyrzucić śmieci", false, Category.HOBBY),
  new Task("Pójść na siłownię", false, Category.GYM),
  new Task("Nakarmić koty", false, Category.WORK),
  new Task("Wyrzucić śmieci", false),
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addBtnEl.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const newTask: Task = new Task(
    taskNameInputEl.value,
    false,
    selectedCategory
  );
  addTask(newTask);
  newTask.logCreationDate("!!!");
  renderTasks(tasks, tasksContainerEl);
});

// interface TaskInterface {
//   name: string;
//   done: boolean;
//   category?: Category;
// }

// interface TaskInterface {
//   createAt: Date;
// }

// let newTask: TaskInterface;

// newTask = {
//   name: "nowy task",
//   done: true,
//   createAt: new Date(),
// };

// console.log(newTask);

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["Kupić jedzenie", Category.GENERAL, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(
  categories,
  categoriesContainerEl,
  selectedCategory,
  updateSelectedCategory
);
renderTasks(tasks, tasksContainerEl);

const taskClassInstance = new TaskClass(
  "Constructor task",
  false,
  Category.SOCIAL
);

console.log(taskClassInstance.category);
