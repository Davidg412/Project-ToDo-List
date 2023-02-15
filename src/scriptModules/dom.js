/**************************DOM Factory functions for all scripts*********************************/
//DOM element creation
export const elementFactory = (type, attribute, text) => {
  const element = document.createElement(type);

  for (key in attribute) {
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
export const hiddenElement = (attribute) => {
  const element = (document.querySelector(attribute).style.display = "none");

  return { element };
};

//Append child element
export const displayElement = (parent, child) => {
  const element = parent.appendChild(child);
  return { element };
};

/********************************Add-Project Sidebar DOM Elements************************************/
//Add Project button
export const addProjectButton = selectElement(".add-project");
