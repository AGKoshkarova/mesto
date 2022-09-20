//Класс, , который отвечает за отрисовку элементов на странице

export default class Section {
    constructor({ renderer }, containerSelector) {
        //this._renderedItems = items;//это массив данных, 
        //которые нужно добавить на страницу при инициализации класса
        this._container = document.querySelector(containerSelector); //селектор контейнера, 
        //в который добавляются карточки
        this._renderer = renderer;//это функция renderElements,
        //которая отвечает за создание и отрисовку данных на странице
    }

    //публичный метод renderItems отрисовки элементов на странице
    //отрисовка каждого отдельного элемента осуществляется функцией renderer
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }

    //публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        this._container.append(element);
    }
}

//У класса Section нет своей разметки. 
//Он получает разметку через функцию-колбэк и вставляет её в контейнер.
//нужно будет вызвать в колбэке в новом экземпляре класса Section