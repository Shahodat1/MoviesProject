const navLogin = document.getElementById('navLogin')!;
const navRegister = document.getElementById('navRegister')!;
const loginPage = document.getElementById('loginPage')!;
const registerPage = document.getElementById('registerPage')!;
const loginBtn = document.getElementById('loginBtn')!;
const registerBtn = document.getElementById('registerBtn')!;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const errorMessage = document.getElementById('errorMessage')!;
const regUsername = document.getElementById('regUsername') as HTMLInputElement;
const regPassword = document.getElementById('regPassword') as HTMLInputElement;
const regName = document.getElementById('regName') as HTMLInputElement;
const logoutBtn = document.getElementById('logout')!;
const userMenu = document.getElementById('userMenu')!;

loginPage.style.display = 'none';
registerPage.style.display = 'none';
userMenu.style.display = 'none';

navLogin.addEventListener('click', () => {
  loginPage.style.display = 'block';
  registerPage.style.display = 'none';
});

navRegister.addEventListener('click', () => {
  registerPage.style.display = 'block';
  loginPage.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin' && password === 'root123') {
    alert('Login successful!');
    loginPage.style.display = 'none';
    userMenu.style.display = 'block';
  } else {
    errorMessage.textContent = 'Invalid username or password!';
  }
});

registerBtn.addEventListener('click', () => {
  console.log('Registered User:');
  console.log('Username:', regUsername.value);
  console.log('Password:', regPassword.value);
  console.log('Name:', regName.value);
  registerPage.style.display = 'none';
  loginPage.style.display = 'block';
});

logoutBtn.addEventListener('click', () => {
  userMenu.style.display = 'none';
  loginPage.style.display = 'block';
});
