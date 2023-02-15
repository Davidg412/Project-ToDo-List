/**************************DOM Factory Functions *********************************/
//DOM element creation
export const elementFactory = (tag, attribute, text) => {
  const element = document.createElement(tag);

  for (let key in attribute) {
    element.setAttribute(key, attribute[key]);
  }

  element.textContent = text;

  return { element };
};

//Select DOM elements
export const selectElement = (attribute) => {
  const selector = document.querySelector(attribute);

  const selectorAll = document.querySelectorAll(attribute);

  return { selector, selectorAll };
};

//Hide DOM content
export const hideElement = (attribute) => {
  const element = (document.querySelector(attribute).style.display = "none");

  return { element };
};

//Append elements
export const displayElement = (parent, child) => {
  const display = parent.appendChild(child);

  return { display };
};

/**************************DOM Elements for Projects sidebar *********************************/
//Existing add Project button
export const addProjectButton = selectElement(".add-project");

export const projectsContainer = selectElement("#projects-container");

//New Project entry
export const newProjectEntry = elementFactory(
  "input",
  { class: "new-entry" },
  ""
);

//Parent Div for Cancel/Add Buttons
export const buttonsContainer = elementFactory(
  "div",
  { class: "buttons-container" },
  ""
);

//Add Button
export const addButton = elementFactory(
  "button",
  { class: "add-button" },
  "Add"
);

//Cancel Button
export const cancelButton = elementFactory(
  "button",
  { class: "cancel-button" },
  "Cancel"
);
