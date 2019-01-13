// найти все ссылки в tabs-controls
// найти все блоки tab-pane
// при клике на пункт tabs-controls должны определить как блок будет показываться
// удаляем во всех tab-pane классы active
// удаляем во всех tabs-controls классы active
// добавляем класс active на текущий tab-pane
// добавляем класс active на текущий tabs-controls


let tabsControls = $('[data-tab-controls]');
let tabPane = $('[data-tab-pane]');

// элемент.on(название события, обработчик события)
tabsControls.on('click', function(e) {
    // отмена стандартного действия браузера
    e.preventDefault();

    // создать переменную в которой будет храниться, то что записано в data-tabs
    let target = $(e.target).attr('data-tabs');

    // получить сам элемент $target
    // удалить active tab-pane
    tabPane.removeClass('active');
    // удалить active tabs-controls
    tabsControls.removeClass('active');
    // добавить класс active на tab-pane
    $(target).addClass('active');
    // добавить класс active на tabs-controls
    $(e.target).addClass('active');
    console.log(tabsControls);



})