import { createEntry, getEntries, updateEntry } from '../api/entryData';
import entryCards from '../pages/entries';

const formEvents = (user) => {
  document.querySelector('#create-entry').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.querySelector('form');

    // eslint-disable-next-line no-undef
    if (e.target.id.includes('create-entry')) {
      const date = (new Date()).toLocaleString('en-US');
      // eslint-disable-next-line no-undef

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#langTech').value,
        dateTime: date.toString(),
        uid: user.uid
      };

      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(entryCards);
        });
      });

      form.reset();
    }
  });
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = (new Date()).toLocaleString('en-US');

    if (e.target.id.includes('edit-form')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#edit-title').value,
        definition: document.querySelector('#edit-definition').value,
        languageTech: document.querySelector('#edit-langTech').value,
        dateTime: date.toString(),
        uid: user.uid,
        firebaseKey
      };

      updateEntry(payload).then(() => {
        getEntries(user.uid).then(entryCards);
      });
    }
  });
  document.querySelector('#form').addEventListener('click', (e) => {
    if (e.target.id.includes('cancel-btn')) {
      getEntries(user.uid).then(entryCards);
    }
  });
};

export default formEvents;
