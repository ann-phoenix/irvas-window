const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			    modal = document.querySelector(modalSelector),
			    close = document.querySelector(closeSelector),
					windows = document.querySelectorAll('[data-modal]'); // все модальные окна со стораницы
// closeClickOverlay = true - закрытие модалки без данных по подложке
		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = 'none';
				}); // все окна блокируем
	
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden'; // запрещаем скролл у body
			});
		});
		//навесили на каждый элемент один и тот же обработчик

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			}); // все окна блокируем

			modal.style.display = 'none';
			document.body.style.overflow = '';
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				windows.forEach(item => {
					item.style.display = 'none';
				}); // все окна блокируем

				modal.style.display = 'none';
				document.body.style.overflow = '';
			}
		}); // закрытие окна по подложке
	}

	function showModalByTime(selector, time) {
		setTimeout(function() {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time)
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	showModalByTime('.popup', 60000);
};

export default modals;