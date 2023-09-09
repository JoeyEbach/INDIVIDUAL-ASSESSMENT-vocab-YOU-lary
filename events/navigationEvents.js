import { searchEntries } from '../api/entryData';
import entryCards from '../pages/entries';

const navEvents = (user) => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchEntries(searchValue, user.uid).then((search) => {
        entryCards(search);
      });
      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
