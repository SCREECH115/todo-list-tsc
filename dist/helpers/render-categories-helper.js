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
