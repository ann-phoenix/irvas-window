const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			    modal = document.querySelector(modalSelector),
			    close = document.querySelector(closeSelector),
					windows = document.querySelectorAll('[data-modal]'), // все модальные окна со стораницы
					scroll = calcScroll();

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
				document.body.style.marginRight = `${scroll}px`; // отступ, чтобы не было скачка
			});
		});
		//навесили на каждый элемент один и тот же обработчик

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
				document.body.style.marginRight = `0px`; 
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
				document.body.style.marginRight = `0px`; 
			}
		}); // закрытие окна по подложке
	}

	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;
		// отнимает от полной ширину div паддинги сам контент div => получаем саму прокрутку
		div.remove(); // удаляем сам div

		return scrollWidth;
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;


