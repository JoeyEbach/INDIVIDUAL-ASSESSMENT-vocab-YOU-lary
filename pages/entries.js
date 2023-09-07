import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const entryCards = (array) => {
  clearDom();
  let domString = '';

  if (!array.length) {
    domString += `
    <h1 style="color:white">Oops! Couldn't find anything!</h1>
    `;
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div id='entry-card' class='card-body'>
        <h5 id='title'>${item.title}</h5>
        <p id='definition' class="definition">${item.definition}</p>
        <h6 id='lang-tech'>${item.languageTech}</h6>
        <p id='date-time'>${item.dateTime}</p>
        <a href="#" id='view-entry--${item.firebaseKey}' class="btn btn-primary">View</a>
        <a href="#" id='update-entry--${item.firebaseKey}' class="btn btn-primary">Update</a>
        <a href="#" id='delete-entry--${item.firebaseKey}' class="btn btn-primary">Delete</a>
      </div>
    </div>
    `;
    });
  }

  renderToDom('#main-container', domString);
};

export default entryCards;
