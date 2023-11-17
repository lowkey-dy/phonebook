'use strict';
// let start = document.addEventListener('DOMContentLoaded', () => { // Запусткает выволнение JavaScript только после загружки всей страницы.


// document.querySelector('.phone-book__input').oninput = function() {
//     let inputValue = this.value.trim();
//     let userName = document.querySelectorAll('.worker__list li');
//     if (inputValue != '') {
//         userName.forEach(function (elem) {
//             if (elem.innerText.search(inputValue) == -1) {
//                 elem.classList.remove('hide');
//             }
//         })
//     };

//     console.log(userName);

// };

const search = document.querySelector('.search__btn').onclick = function() {
  
    //Если ввели с маленькой буквы, меняем на заглавную
    const enteredName = document.querySelector('.surname__input').value.trim(),
          nameUpperCase = enteredName.charAt(0).toUpperCase() + enteredName.slice(1); 

    // Запрещает нажимать кнопку Показатьб, если ничего не ввели и вводят числа
    if (enteredName == '' || enteredName === Number) {
        alert('Введите фамилию, полностью, на русском языке.');
        return false;
    }; 

    // Поиск в базе данных по фамилии
    let userName = phoneDataBase.find(el => el.name == nameUpperCase || el.surname == nameUpperCase);
 
   // Вывод данных из базы данных в HTML (Фамилия, Имя, Телефон, Номер фонаря, Табельный номер)
    function writeUserInfo () { 
        const testArray = document.querySelectorAll('.text_field');
        
        for (let i = 0; i < testArray.length; i ++) {
            if (testArray[i] == testArray[0]) {
                testArray[0].textContent = userName.surname;
            } if (testArray[i] == testArray[1]) {
                testArray[i].textContent = userName.name;
            } if (testArray[i] == testArray[2]) {
                testArray[2].textContent = userName.phone;
            } if (testArray[i] == testArray[3]) {
                testArray[3].textContent = userName.light;
            } if (testArray[i] == testArray[4]) {
                testArray[4].textContent = userName.id;
            } 
        }
    }
    writeUserInfo();

    // Достает фотку из базы данных
    document.querySelector('.photo-field').style.backgroundImage = 'url("'+ userName.photo +'")';

    
    // const check = document.querySelectorAll('.test');
    // const addData = (arr) => {
    //     arr.forEach(item => {
         
            
    //     }); 
    // }
    // addData(check);
    // console.dir(check);

};

// Чекает и удаляет данные в полях
const reset = document.querySelector('.clear__btn').onclick = function() {
    
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

    document.querySelector('.show-field_1').textContent = 'Телефон';
    document.querySelector('.show-field_2').textContent = 'Фонарь';
    document.querySelector('.show-field_3').textContent = 'Табельный';       //<--- Переписать в массив

};

// });

console.dir(phoneDataBase);
