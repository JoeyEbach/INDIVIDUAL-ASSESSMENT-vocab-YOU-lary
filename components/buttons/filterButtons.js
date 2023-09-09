import renderToDom from '../../utils/renderToDom';

const filterButtons = () => {
  let domString = '';
  domString += `
    <button type="button" id="all-entries-btn" class="btn btn-primary all-filter">All</button>
    <button type="button" id="java-filter-btn" class="btn btn-primary filter">Javascript</button>
    <button type="button" id="html-filter-btn" class="btn btn-primary filter">HTML</button>
    <button type="button" id="css-filter-btn" class="btn btn-primary filter">CSS</button>
    <button type="button" id="react-filter-btn" class="btn btn-primary filter">React</button>
    <button type="button" id="c#-filter-btn" class="btn btn-primary filter">C#</button>
  `;
  renderToDom('#filter-buttons', domString);
};

export default filterButtons;
