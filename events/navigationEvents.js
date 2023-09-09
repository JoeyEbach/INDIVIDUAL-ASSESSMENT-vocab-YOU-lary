import { searchEntries } from '../api/entryData';
import entryCards from '../pages/entries';

const navEvents = (user) => {
  document.querySelector('#search').addEventListener('keyup', () => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    searchEntries(searchValue, user.uid).then((search) => {
      entryCards(search);
    });
  });
};

export default navEvents;
