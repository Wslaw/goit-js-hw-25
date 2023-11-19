// ЗАДАЧА 1

// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.
const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const data = {};

const refs = {
  formElement: document.querySelector('#login-form'),
  btn: document.querySelector('.login-btn'),
  inputLogin: document.querySelector('input[name = "email"]'),
  inputPassword: document.querySelector('input[name = "password"]'),
  todo: document.querySelector('.todo'),
  btnEmail: document.querySelector('.btn-email'),
  btnPassword: document.querySelector('.btn-password'),
};

refs.formElement.addEventListener('input', onSaveData);
refs.formElement.addEventListener('submit', onSubmit);
refs.btnEmail.addEventListener('click', onEmail);
refs.btnPassword.addEventListener('click', onPassword);
refs.todo.addEventListener('submit', onAddTodo);


function onSaveData(event) {
  
  // **Деструктуризируем name і value  із event.target***
  const { name, value } = event.target;
  
  // Наступна строка створює записує
  //  в об'єкт data  ключ name со значенням value
  data[name] = value;
  console.log(data);
  console.log(data.name);
  console.log(data.value);
}

function onSubmit(event) {
  event.preventDefault();
  if (refs.btn.textContent === 'LOG out') {
    refs.btn.textContent = 'Login';
    refs.inputLogin.removeAttribute('readonly');
    refs.inputPassword.removeAttribute('readonly');
    localStorage.removeItem('form-data');
    refs.todo.style.display = 'none';
    return;
  }

  if (!data.email || !data.password) return alert('Enter all fields');
  if (USER_DATA.email !== data.email || USER_DATA.password !== data.password)
    return alert('Uncorrect data ');
  localStorage.setItem('form-data', JSON.stringify(data));
  loginUser();
  event.currentTarget.reset();
}

function onEmail(e) {
  e.preventDefault();

  data.email = USER_DATA.email;
  localStorage.setItem('form-data', JSON.stringify(data));
  refs.inputLogin.value = `${USER_DATA.email}`;
}
function onPassword(e) {
  e.preventDefault();
  data.password = USER_DATA.password;
  localStorage.setItem('form-data', JSON.stringify(data));
  refs.inputPassword.value = `${USER_DATA.password}`;
}
let dataBase = {};
dataBase = localStorage.getItem('form-data');
if (dataBase !== null) console.log("");

function populateData() {
  if (localStorage.getItem('form-data')) {
    loginUser();
  }
}

function loginUser() {
  refs.btn.textContent = 'LOG out';
  refs.inputLogin.setAttribute('readonly', true);
  refs.inputPassword.setAttribute('readonly', true);
  refs.todo.style.display = 'flex';
}
populateData();

