import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSetting = {
  databaseURL:
    'https://realtime-databse-f8a07-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

addButtonEl.addEventListener('click', function () {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);
  
  console.log(inputValue);
});
