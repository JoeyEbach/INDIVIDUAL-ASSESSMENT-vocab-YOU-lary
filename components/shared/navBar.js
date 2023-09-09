import renderToDom from '../../utils/renderToDom';
import formModal from './formModal';

const navBar = () => {
  let domString = '';
  domString += `
    <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid" style="background-color:#333131">
      <a class="navbar-brand" href="#">codeWord</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form id="create-entry">
        ${formModal()};
      </form class="search">
        <form id="search-bar" class="d-flex" role="search">
          <input class="form-control me-2 search-input" type="search" placeholder="Search" id="search" aria-label="Search">
          <button class="btn btn-outline-success search-btn" type="submit">Search</button>
        </form>
        <div id="logButton"></div>
      </div>
    </div>
  </nav>
  `;

  renderToDom('#nav-bar', domString);
};

export default navBar;
