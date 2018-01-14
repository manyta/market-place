//найти все ссылки tabs-controls и все блоки tab-pane
//при клике на пункт tabs-controls мы должны определить какой пункт показывать
//найти этот блок
//удаляем со всех tab-pane классы active
//удаляем со всех ссылок tabs-controls класс active
//добавить класс active на текущий tab-pane
//добавить класс active на текущий tabs-control

//{ name: 'Maxim', age: 28}
//$('.tabs-controls a')

let tabsControls = $('.tabs-controls a');
let tabPane = $('.tab-pane');
//элемент.on(название_события, обработчик)
tabsControls.on('click', function(e){

	//отмена стандартного действия браузера
	e.preventDefault();

	//создадим переменную, в которой будем хранить то, что записано в data-tabs
	let target = $(e.target).attr('data=tabs');

	//получить сам элемент $(target)
	//удалить со всех tab-pane класс active
	tabPane.removeClass('active');
	//удалить класс со всех tab-controls
	tab.tabsControls.removeClass('active');
	
	$(target).addClass('active');

});