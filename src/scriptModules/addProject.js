import {
  hideElement,
  addProjectButton,
  newProjectEntry,
  projectsContainer,
  displayElement,
  addButton,
  cancelButton,
  buttonsContainer,
} from "./dom";

//Function to Add a project
export const addProject = () => {
  addProjectButton.selector.addEventListener("click", () => {
    hideElement(".add-project");
    //Display input-box & buttons
    displayElement(projectsContainer.selector, newProjectEntry.element);
    displayElement(projectsContainer.selector, buttonsContainer.element);
    displayElement(buttonsContainer.element, addButton.element);
    displayElement(buttonsContainer.element, cancelButton.element);
  });
};
