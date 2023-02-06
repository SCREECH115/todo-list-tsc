import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks-helper.js";
import { render as renderCategories } from "./helpers/render-categories-helper.js";

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
  { name: "Wyrzucić śmieci", done: false, category: Category.GENERAL },
  { name: "Pójść na siłownię", done: false, category: Category.GYM },
  { name: "Nakarmić koty", done: false, category: Category.WORK },
  { name: "Uczyć się JS", done: false, category: Category.HOBBY },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addBtnEl.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: taskNameInputEl.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerEl);
});

renderCategories(
  categories,
  categoriesContainerEl,
  selectedCategory,
  updateSelectedCategory
);
renderTasks(tasks, tasksContainerEl);
