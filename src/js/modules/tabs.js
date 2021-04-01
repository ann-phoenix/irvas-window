const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
	const header = document.querySelector(headerSelector),
		    tab = document.querySelectorAll(tabSelector),
		    content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});
		//скрываем весь контент

		tab.forEach(item => {
			item.classList.remove(activeClass);
		})
		//убираем класс активности
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(activeClass);
	}
	//добавляем класс активности
	// i - контент определенного tab

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target &&
			(target.classList.contains(tabSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) { // проверка клика именно на tab, убираем точку у класса
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});// в какой именно по счету кликнули tab, i - номер tab
		}
	});// навесили ОС на общую область с tabs, отслеживаем в какой tab кликнул пользователь
};

export default tabs;