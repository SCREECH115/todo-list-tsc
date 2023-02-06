import renderTasks from "./helpers/render-tasks-helper.js";
import { render as renderCategories } from "./helpers/render-categories-helper.js";
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const categoriesContainerEl = document.querySelector(".categories");
let selectedCategory;
const categories = ["General", "Work", "Gym", "Hobby"];
const tasks = [
    { name: "Wyrzucić śmieci", done: false, category: "General" },
    { name: "Pójść na siłownię", done: false, category: "Gym" },
    { name: "Nakarmić koty", done: false, category: "Work" },
    { name: "Uczyć się JS", done: false, category: "Hobby" },
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
renderCategories(categories, categoriesContainerEl, selectedCategory, updateSelectedCategory);
renderTasks(tasks, tasksContainerEl);
