import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewEntry = (obj) => {
  clearDom();
  let domString = '';
  domString += `
  <div id="single-title">${obj.title}</div>
  <div id="single-langtech">${obj.languageTech}</div>
  <div id="single-definition">${obj.definition}</div>
  <div id="single-title">${obj.dateTime}</div>
  <a href="#" id='update-entry--${obj.firebaseKey}' class="btn btn-primary">Update</a>
  <a href="#" id='delete-entry--${obj.firebaseKey}' class="btn btn-primary">Delete</a>
  <a href="#" id='update-entry--${obj.firebaseKey}' class="btn btn-primary">Update</a>
  <div>
  <a href="#" id='view-all-entries' class="btn btn-primary">View All Entries</a>
  </div>
  `;

  renderToDom('#view', domString);
};

export default viewEntry;
