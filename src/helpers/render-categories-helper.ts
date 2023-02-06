import { Category } from "../types/types";

export const render = (
  categories: Category[],
  categoriesContainerEl: HTMLElement,
  selectedCategory: Category
) => {
  categories.forEach((category) => {
    const categoryEl: HTMLElement = document.createElement("li");

    const radioInputEl: HTMLInputElement = document.createElement("input");
    radioInputEl.type = "radio";
    radioInputEl.name = "category";
    radioInputEl.value = category;
    radioInputEl.id = `category-${category}`;
    radioInputEl.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelEl: HTMLLabelElement = document.createElement("label");
    labelEl.setAttribute("for", `category-${category}`);
    labelEl.innerText = category;

    categoryEl.appendChild(radioInputEl);
    categoryEl.appendChild(labelEl);
    categoriesContainerEl.appendChild(categoryEl);
  });
};
