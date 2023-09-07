/* eslint-disable no-undef */
// import createEntry from '../components/forms/createEntry';

const navEvents = () => {
  // const formModal = bootstrap.Modal.getOrCreateInstance('#nav-bar');
  // formModal.hide();
  document.querySelector('#create-entry').addEventListener('click', () => {
    $('#exampleModal').modal();
  });
};

export default navEvents;
