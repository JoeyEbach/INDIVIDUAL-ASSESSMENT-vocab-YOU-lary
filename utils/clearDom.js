const clearDom = () => {
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#form').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
