/* eslint-disable no-alert */
import {
  deleteEntry, filterEntry, getEntries, getSingleEntry
} from '../api/entryData';
import editEntry from '../components/forms/updateEntry';
import entryCards from '../pages/entries';
import viewEntry from '../pages/viewEntry';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-entry')) {
      if (window.confirm('Are you sure you want to delete this entry?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then((array) => entryCards(array));
        });
      }
    }
    if (e.target.id.includes('view-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((array) => viewEntry(array));
    }
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((item) => editEntry(item));
    }
  });

  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.id.includes('html-filter-btn')) {
      filterEntry('html', user.uid);
    }
    if (e.target.id.includes('java-filter-btn')) {
      filterEntry('javascript', user.uid);
    }
    if (e.target.id.includes('react-filter-btn')) {
      filterEntry('react', user.uid);
    }
    if (e.target.id.includes('c#-filter-btn')) {
      filterEntry('c#', user.uid);
    }
    if (e.target.id.includes('css-filter-btn')) {
      filterEntry('css', user.uid);
    }
    if (e.target.id.includes('all-entries-btn')) {
      getEntries(user.uid).then((array) => entryCards(array));
    }
  });

  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('view-all-entries')) {
      getEntries(user.uid).then((array) => entryCards(array));
    }
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((item) => editEntry(item));
    }
    if (e.target.id.includes('delete-entry')) {
      if (window.confirm('Are you sure you want to delete this entry?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then((array) => entryCards(array));
        });
      }
    }
  });
};

export default domEvents;
