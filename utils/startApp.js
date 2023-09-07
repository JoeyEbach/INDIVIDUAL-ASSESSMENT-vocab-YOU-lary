import filterButtons from '../components/buttons/filterButtons';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import entryCards from '../pages/entries';
import { getEntries } from '../api/entryData';
// import navEvents from '../events/navigationEvents';
import 'bootstrap';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  getEntries(user.uid).then((array) => entryCards(array));
  navBar();
  domEvents(user);
  formEvents(user);
  filterButtons();
};

export default startApp;
