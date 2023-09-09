import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const entryCards = (array) => {
  clearDom();
  let domString = '';

  if (!array.length) {
    domString += `
    <div class="no-cards">
    <h1 style="color:white">Oops! Couldn't find any codeWords!</h1>
    </div>
    `;
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div id='entry-card' class='card-body'>
        <div class="lang">
        <h6 id='lang-tech'>${item.languageTech}</h6>
        </div>
        <h5 id='title'>${item.title}</h5>
        <p id='definition' class="definition">${item.definition}</p>
        <p id='date-time'>Last Update: ${item.dateTime}</p>
        <div class="card-btns">
        <a href="#" id='view-entry--${item.firebaseKey}' class="btn btn-primary card-btn">View</a>
        <a href="#" id='update-entry--${item.firebaseKey}' class="btn btn-primary card-btn">Update</a>
        <a href="#" id='delete-entry--${item.firebaseKey}' class="btn btn-primary card-btn delete">Delete</a>
        </div>
      </div>
    </div>
    `;
    });
  }

  renderToDom('#main-container', domString);
};

export default entryCards;
