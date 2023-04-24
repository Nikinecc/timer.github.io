let date = new Date('Jan 1 2024 00:00:00'); //Сюда ставите дату
function counts(){//Функция которая вычесляет время
    let now = new Date();//определяем нынешнее время
    gap = date - now;//вычитаем из нужной даты нынешнее время и получаем разницу в миллисекундах
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);// Вычисляет дни
    let hours = Math.floor(gap / 1000 / 60 / 60 )%24;// Вычисляет часы
    let minutes = Math.floor(gap / 1000 / 60 )%60;// Вычисляет минуты
    let seconds = Math.floor(gap / 1000)%60;// Вычисляет секунды
    if(gap < 0){//После завершения таймера он обновляется и к дням, часас и т.д. добавляется опр. время. Можно поставить свои
        days+=7;//Добавляем 7 дней
        hours+=24;//Добавляем 24 часа
        minutes+=60;//Добавляем 60 минут
        seconds+=60;//Добавляем 60 секунд
    }
    document.querySelector('.d-number').innerText = days;//Меняет текст для блока дни
    document.querySelector('.h-number').innerText = hours;//Меняет текст для блока часы
    document.querySelector('.m-number').innerText = minutes;//Меняет текст для блока минуты
    document.querySelector('.s-number').innerText = seconds;//Меняет текст для блока секунды
}
setInterval(() => {//интервал который вызывает функцию каждую секунду
    counts();//Вызов функции
}, 1000);//1 секунды в миллисекундых

let dateSecond = new Date('Jan 1 2025 14:12:31'); //Сюда ставите дату
function countsSecond(){//Функция которая вычесляет время
    let now = new Date();//определяем нынешнее время
    gap = dateSecond - now;//вычитаем из нужной даты нынешнее время и получаем разницу в миллисекундах
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);// Вычисляет дни
    let hours = Math.floor(gap / 1000 / 60 / 60 )%24;// Вычисляет часы
    let minutes = Math.floor(gap / 1000 / 60 )%60;// Вычисляет минуты
    let seconds = Math.floor(gap / 1000)%60;// Вычисляет секунды
    if(gap < 0){//После завершения таймера он обновляется и к дням, часас и т.д. добавляется опр. время. Можно поставить свои
        days+=7;//Добавляем 7 дней
        hours+=24;//Добавляем 24 часа
        minutes+=60;//Добавляем 60 минут
        seconds+=60;//Добавляем 60 секунд
    }
    document.querySelector('.da-number').innerText = days;//Меняет текст для блока дни
    document.querySelector('.ho-number').innerText = hours;//Меняет текст для блока часы
    document.querySelector('.mi-number').innerText = minutes;//Меняет текст для блока минуты
    document.querySelector('.se-number').innerText = seconds;//Меняет текст для блока секунды
}
setInterval(() => {//интервал который вызывает функцию каждую секунду
    countsSecond();//Вызов функции
}, 1000);//1 секунды в миллисекундых