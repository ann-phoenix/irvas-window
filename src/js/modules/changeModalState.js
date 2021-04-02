import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');
	// запись только цифр

	function bindActionToElems(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i; //выбор картинки-таба
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'; // выбор профиля 
							elem.forEach((box, j) => {
								box.checked = false;
								if (i == j) {
									box.checked = true;
								}
							}); // выбор только одного чекбокса
						} else {
							state[prop] = item.value; // получаем данные из инпута
						}
						break;
					case 'SELECT':
						state[prop] = item.value; // получаем данные из селекта
						break;
				}

				console.log(state);
			});
		});
	}

	bindActionToElems('click', windowForm, 'form'); // получаем выбранную форму балкона в объект state
	bindActionToElems('input', windowWidth, 'width'); // получаем ширину
	bindActionToElems('input', windowHeight, 'height'); // получаем высоту
	bindActionToElems('change', windowType, 'type'); // получаем тип окна
	bindActionToElems('change', windowProfile, 'profile'); // получаем профиль окна
};

export default changeModalState;