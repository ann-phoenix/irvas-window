import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
	windowWidth = document.querySelector('#width'),
	windowHeight = document.querySelector('#height'),
	windowType = document.querySelector('#view_type'),
	windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');
	// запись только цифр


	windowForm.forEach((item, i) => {
		item.addEventListener('click', () => {
			state.form = i;
			console.log(state);
		});
	}); // получаем выбранную форму балкона в объект state
};

export default changeModalState;