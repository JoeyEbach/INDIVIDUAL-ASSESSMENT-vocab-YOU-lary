import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const editEntry = (obj = {}) => {
  clearDom();
  let domString = '';

  domString += `
    <form id="edit-form--${obj.firebaseKey}">
    <div class="mb-3">
      <label for="edit-title" class="form-label"></label>
      <input type="text" class="form-control" id="edit-title" placeholder="${obj.title || 'codeWord'}" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="edit-definition" class="form-label"></label>
      <input type="text" class="form-control" id="edit-definition" placeholder="${obj.definition || 'Definition'}">
    </div>
    <select id="edit-langTech" class="form-select" aria-label="Default select example">
    <option selected>${obj.languageTech || 'Language | Tech'}</option>
    <option value="Javascript">Javascript</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="React">React</option>
    <option value="C#">C#</option>
  </select>
    <button type="submit" class="btn btn-primary edit-submit" id="edit-form">Submit</button>
    <button type="button" id="cancel-btn" class="btn btn-primary">Cancel</button>
  </form>
  
  `;

  renderToDom('#form', domString);
};

export default editEntry;
