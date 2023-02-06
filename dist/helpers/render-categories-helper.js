export const render = (categories, categoriesContainerEl, selectedCategory) => {
    categories.forEach((category) => {
        const categoryEl = document.createElement("li");
        const radioInputEl = document.createElement("input");
        radioInputEl.type = "radio";
        radioInputEl.name = "category";
        radioInputEl.value = category;
        radioInputEl.id = `category-${category}`;
        radioInputEl.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelEl = document.createElement("label");
        labelEl.setAttribute("for", `category-${category}`);
        labelEl.innerText = category;
        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(labelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};
