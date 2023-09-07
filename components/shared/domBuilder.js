import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  let domString = '';
  domString += `
  <div id='nav-bar'></div>
  <div id='filter-buttons'></div>
  <div id='main-container'></div>
  <div id='view'></div>
  <div id='form'></div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
