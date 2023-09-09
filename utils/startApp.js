import filterButtons from '../components/buttons/filterButtons';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import entryCards from '../pages/entries';
import { getEntries } from '../api/entryData';
import 'bootstrap';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import logoutButton from '../components/buttons/logoutButton';
import navEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  getEntries(user.uid).then((array) => entryCards(array));
  navBar();
  filterButtons();
  domEvents(user);
  formEvents(user);
  navEvents(user);
  logoutButton();
};

export default startApp;
