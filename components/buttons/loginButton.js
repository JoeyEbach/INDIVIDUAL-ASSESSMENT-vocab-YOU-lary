import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  let domString = '';
  domString += `
  <h1 id="home-title">Welcome To codeWord</h1>
  <button id="google-auth" id="sign-in" style="background-color:#B41B70" class="btn btn-danger">Sign In</button>
  `;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
