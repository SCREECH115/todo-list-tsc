import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("asdasd");
    }
    else if (category === Category.GYM) {
        alert("sadasdsad");
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = "red";
    }
    else if (category === Category.WORK) {
        document.body.style.background = "green";
        alert("sadasdsad");
        console.log("asdasd");
    }
    else if (category === Category.SOCIAL) {
        console.log("sociality");
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoriesContainerEl, selectedCategory, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryEl = document.createElement("li");
        const radioInputEl = document.createElement("input");
        radioInputEl.type = "radio";
        radioInputEl.name = "category";
        radioInputEl.value = category;
        radioInputEl.id = `category-${category}`;
        radioInputEl.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelEl = document.createElement("label");
        labelEl.setAttribute("for", `category-${category}`);
        labelEl.classList.add(`${category}`);
        labelEl.innerText = category;
        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(labelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};
