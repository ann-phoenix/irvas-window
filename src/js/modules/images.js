const images = () => {
	const imgPopup = document.createElement('div'), // модальное окно
		workSection = document.querySelector('.works'), // общий блок изображений
		bigImg = document.createElement('img');

	imgPopup.classList.add('popup');

	workSection.appendChild(imgPopup); // помещаем модалку в общую секцию

	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignItems = 'center';
	imgPopup.style.display = 'none';
	bigImg.style.maxHeight = '80vh';
	bigImg.style.maxWidth = '100%';


	imgPopup.appendChild(bigImg); // помещаем изображение в модалку

	workSection.addEventListener('click', (e) => {
		e.preventDefault(); // отмена стандартного поведения у ссылки

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';
			document.body.style.overflow = 'hidden';
			// показываем модалку и запрещаем прокрутку body

			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
			// получаем большую картинку по ссылке родителя эл-та, на который кликнули
		}

		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none';
			document.body.style.overflow = '';
			// закрываем модалку и возвращаем прокрутку body

		}
	}); // ОС для больших картинок
	// target && target.classList.contains('preview') - проверка клика на картинку
	//(target && target.matches('div.popup')) - проверка на клик в модалку
};

export default images;

