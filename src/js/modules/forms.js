import checkNumInputs from './checkNumInputs';

const forms = (state) => {
	const form = document.querySelectorAll('form'),
		    input = document.querySelectorAll('input');

	checkNumInputs('input[name="user_phone"]');
	// запись только цифр

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await res.text(); // обрабатываем promise
	}; // отправляем запрос на сервер

	const clearInputs = () => {
		input.forEach(item => {
			item.value = ''
		});
	}; // очищаем все input

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);
			// создали блок с сообщением о статусе

			const formData = new FormData(item); // сбор данных из формы
			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}	// проверка последнего модального окна и отправка данных в formData

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 10000);
				});
				// отправляем запрос на сервер
		});
	});

};

export default forms;