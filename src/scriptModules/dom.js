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

//Display DOM content
export const showElementFlex = (attribute) => {
  const element = (document.querySelector(attribute).style.display = "flex");

  return { element };
};

export const showElementBlock = (attribute) => {
  const element = (document.querySelector(attribute).style.display = "block");

  return { element };
};

//Append elements
export const appendElement = (parent, child) => {
  const display = parent.appendChild(child);

  return { display };
};

/**************************DOM Elements for Projects sidebar *********************************/
//Existing add Project button
export const addProjectButton = selectElement(".add-project");

export const projectsContainer = selectElement("#projects-container");

//export const addButton = selectElement(".add-button");

export const cancelButton = selectElement(".cancel-button");

