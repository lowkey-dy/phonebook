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
 
   // Вывод данных из базы данных в HTML (Фамилия, Имя, Телефон, Номер фонаря, Табельный номер)
   const testArray = document.querySelectorAll('.text_field');

    function writeUserInfo () { 
        for (let i = 0; i < testArray.length; i ++) {
            if (testArray[i] == testArray[0]) {
                testArray[0].textContent = userName.prof;
            } else if (testArray[i] == testArray[1]) {
                testArray[i].textContent = userName.surname;
            } else if (testArray[i] == testArray[2]) {
                testArray[2].textContent = userName.name;
            } else if (testArray[i] == testArray[3]) {
                testArray[3].textContent = userName.phone;
            } else if (testArray[i] == testArray[4]) {
                testArray[4].textContent = userName.light;
            } else if (testArray[i] == testArray[5]) {
                testArray[5].textContent = userName.id;
            }
        }
    }
    writeUserInfo();

    console.dir(userName);

    // Достает фотку из базы данных
    document.querySelector('.photo-field').style.backgroundImage = 'url("'+ userName.photo +'")';
};

// Чистим все нажатием на 'Escape'
document.getElementById('body').addEventListener('keydown', function (event){
    if (event.code === 'Escape') {
        document.getElementById("clear__btn").click();
    }
});

// Чекает и удаляет данные в полях
const reset = document.querySelector('.clear__btn').onclick = function() {

    document.querySelector('.show-field_1').textContent = 'Телефон';
    document.querySelector('.show-field_2').textContent = 'Фонарь';
    document.querySelector('.show-field_3').textContent = 'Табельный';  //<--- Переписать в массив
    document.querySelector('.show-field_4').textContent = 'Введите фамилию';  //<--- Переписать в массив
    
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


