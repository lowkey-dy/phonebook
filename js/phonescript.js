'use strict';
// let start = document.addEventListener('DOMContentLoaded', () => { // Запусткает выволнение JavaScript только после загружки всей страницы.

// --Выпадающий список начало
const resultBox = document.querySelector('.search__result'),
      searchInput = document.getElementById('search_input');

searchInput.onkeyup = function() {
    let result = [];
    let input = searchInput.value;

    if (!result.lenght) {
        resultBox.innerHTML = '';
    }

    if(input.length) {
        result = base.filter((dataBase) => {
           return dataBase.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }
    display(result);

};

function display(result) {
    const content = result.map((list) => {
        return "<li class = 'list-item' onclick = selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML = "<ul class = 'list'>" + content.join('') + "</ul>";
}


function selectInput(list) {
    searchInput.value = list.innerHTML;
    resultBox.innerHTML = '';
    document.getElementById("search_btn").click();
}

//Выпадающий список конец--

//Копируем табельный в буфер обмена
function idCopy () {
    document.getElementById('id__wrapper').onclick = (event) => {
        const elem = event.target;
        
        if (elem.classList.contains('copy-text')) {
            navigator.clipboard.writeText(elem.innerHTML);
            elem.classList.toggle('copy-text1');
        }
    }
}
idCopy();

//Запускает поиск при нажатии на "Enter"
// Просто чтоб починить
document.getElementById('search_input').addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        document.getElementById("search_btn").click();
    }
});

const search = document.querySelector('.search__btn').onclick = function() {

    //Если ввели с маленькой буквы, меняем на заглавную
    const enteredName = document.querySelector('.surname__input').value.trim(),
          nameUpperCase = enteredName.charAt(0).toUpperCase() + enteredName.slice(1); 

    // Запрещает нажимать кнопку Показать, если ничего не ввели и вводят числа
    if (enteredName == '' || enteredName === Number) {
        alert('Введите фамилию, полностью, на русском языке.');
        return false;
    }; 

    // Поиск в базе данных по фамилии
    let userName = phoneDataBase.find(el => el.name == nameUpperCase || el.surname == nameUpperCase);
 
   // Вывод данных из базы данных в HTML (Фамилия, Имя, Телефон, Номер фонаря, Табельный номер, Фото пользователя)
   const testArray = document.querySelectorAll('.text_field');

    function writeUserInfo() {
        for (let i = 0; i < testArray.length; i++) {
            switch (testArray[i]) {
                case testArray[0]:
                    testArray[i].textContent = userName.prof;
                    break;
                case testArray[1]:
                    testArray[i].textContent = userName.surname;
                    break;
                case testArray[2]:
                    testArray[i].textContent = userName.name;
                    break;
                case testArray[3]:
                    testArray[i].textContent = userName.phone;
                    break;
                case testArray[4]:
                    testArray[i].textContent = userName.light;
                    break;
                case testArray[5]:
                    testArray[i].textContent = userName.id;
                    break;
                case testArray[6]:
                    testArray[i].style.backgroundImage = 'url("'+ userName.photo +'")';
                    break;
            }
        }
    }
    writeUserInfo();

    console.dir(userName);
};

// Чистим все нажатием на 'Escape'
document.getElementById('body').addEventListener('keydown', function (event){
    if (event.code === 'Escape') {
        document.getElementById("clear__btn").click();
    }
});

// Чекает и удаляет данные в текстовых полях
const reset = document.querySelector('.clear__btn').onclick = function() {

    let fields = ['.show-field_1', '.show-field_2', '.show-field_3', '.show-field_4'];
    let values = ['Телефон', 'Фонарь', 'Табельный', 'Введите фамилию'];

    for (let i = 0; i < fields.length; i++) {
        document.querySelector(fields[i]).innerText = values[i];
    }
   
    //Очищает имя и фамилию
    const textRemove = document.querySelectorAll('.name-field'), 
            deleteText = (arr) => { 
        arr.forEach(item => {
            item.textContent = '';
        });
    };
    deleteText(textRemove);
  
    //Очищает инпут
    document.querySelector('.surname__input').value = '';

    //Убирает фото работника
    document.querySelector('.photo-field').style.backgroundImage = 'url(img/BgF.png)';

};

// });


