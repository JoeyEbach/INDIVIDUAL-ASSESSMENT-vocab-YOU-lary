import navBar from '../components/shared/navBar';

const resetNav = () => {
  document.querySelector('#nav-bar').innerHTML = '';
  navBar();
};

export default resetNav;
