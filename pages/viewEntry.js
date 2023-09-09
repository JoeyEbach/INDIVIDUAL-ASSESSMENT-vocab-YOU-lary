import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewEntry = (obj) => {
  clearDom();
  let domString = '';
  domString += `
  <div class="card">
    <div class="card-body view-entry">
    <div class="single-tech">
      <div id="single-langtech">${obj.languageTech}</div>
    </div>
    <div id="single-title">${obj.title}</div>
    <div id="single-definition">${obj.definition}</div>
    <div id="single-date">Last Update: ${obj.dateTime}</div>
    <div class="single-btns">
      <a href="#" id='update-entry--${obj.firebaseKey}' class="btn btn-primary single">Update</a>
      <a href="#" id='delete-entry--${obj.firebaseKey}' class="btn btn-primary single single-delete">Delete</a>
      <a href="#" id='view-all-entries' class="btn btn-primary single">Close</a>
    </div>
  </div>
  </div>
  `;

  renderToDom('#view', domString);
};

export default viewEntry;
