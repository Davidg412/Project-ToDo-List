import {
  hideElement,
  showElementFlex,
  showElementBlock,
  addProjectButton,
  projectsContainer,
  appendElement,
  selectElement,
  cancelButton,
} from "./dom";

//Function to Add a project
export const addProject = () => {
  addProjectButton.selector.addEventListener("click", () => {
    hideElement(".add-project");
    showElementBlock(".new-entry");
    //Display input-box & buttons
    const buttonsContainer = selectElement(".buttons-container");
    appendElement(projectsContainer.selector, buttonsContainer.selector);
    showElementFlex(".buttons-container");

    //If cancel button is clicked
    cancelButton.selector.addEventListener("click", () => {
      hideElement(".buttons-container");
      hideElement(".new-entry");
      showElementBlock(".add-project");
    });
  });
};
