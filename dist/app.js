import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks-helper.js";
import { render as renderCategories } from "./helpers/render-categories-helper.js";
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const categoriesContainerEl = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    { name: "Wyrzucić śmieci", done: false, category: Category.GENERAL },
    { name: "Pójść na siłownię", done: false, category: Category.GYM },
    { name: "Nakarmić koty", done: false, category: Category.WORK },
    { name: "Uczyć się JS", done: false, category: Category.HOBBY },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputEl.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerEl);
});
const task = ["zroic klatke", Category.GENERAL, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerEl, selectedCategory, updateSelectedCategory);
renderTasks(tasks, tasksContainerEl);
let newTask;
newTask = {
    name: "nowy task",
    done: true,
    createAt: new Date(),
};
console.log(newTask);
