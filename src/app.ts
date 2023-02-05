// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów

const taskNameInputEl: HTMLInputElement = document.querySelector("#name");
const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const addBtnEl: HTMLButtonElement = document.querySelector("button");
const categoriesContainerEl: HTMLElement =
  document.querySelector(".categories");

type Category = "general" | "work" | "gym" | "hobby";

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  { name: "Wyrzucić śmieci", done: false },
  { name: "Pójść na siłownię", done: true, category: "gym" },
  { name: "Nakarmić koty", done: false },
];

const render = () => {
  tasksContainerEl.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;

    const labelElement: HTMLElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(checkboxElement);
    taskElement.appendChild(labelElement);

    tasksContainerEl.appendChild(taskElement);
  });
};

const renderCategories = () => {
  // <li>
  // <input
  //   type="radio"
  //   name="category"
  //   value="general"
  //   id="category-general"
  // />
  // <label for="category-general">General</label>
  // </li>

  categories.forEach((category) => {
    const categoryEl: HTMLElement = document.createElement("li");

    const radioInputEl: HTMLInputElement = document.createElement("input");

    categoriesContainerEl.appendChild(categoryEl);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addBtnEl.addEventListener("click", (event: Event) => {
  const selectedRadioEl: HTMLInputElement = document.querySelector(
    "input[type='radio']:checked"
  );

  const selectedCategory: Category = selectedRadioEl.value as Category;
  event.preventDefault();
  addTask({
    name: taskNameInputEl.value,
    done: false,
    category: selectedCategory,
  });
  render();
});

addTask({
  name: "Zrobic kawę",
  category: "general",
  done: false,
});
render();
