window.onload = function () {

	// INIT const for select elements 
	const KEYS = document.getElementsByTagName('li');
	const DISPLAY = document.getElementById('display');

	// INIT variable 
	var PrevOperand = null,
		Operation = null;

	// function calculation
	function calculation(PrevOperand, Operation, DISPLAY) {
		if (Operation == '/') {
			if (DISPLAY != 0) {
				return (+PrevOperand) / (+DISPLAY);
			} else {
				alert('Деление на 0 невозможно!');
				return 'Error';
			}
		}
		if (Operation == '*') {
			return (+PrevOperand) * (+DISPLAY);
		}
		if (Operation == '-') {
			return (+PrevOperand) - (+DISPLAY);
		}
		if (Operation == '+') {
			return (+PrevOperand) + (+DISPLAY);
		}
	}

	// processing all keys 
	for (let index = 0; index < KEYS.length; index++) {
		let class_name = KEYS[index].className,
			key = KEYS[index];

		switch (class_name) {
			// numbers 
			case 'num':
				key.addEventListener('click', function (e) {
					if (DISPLAY.value.length > 11) {
						alert('Превышено допустимое число символов!')
						return false;
					} else {
						if (DISPLAY.value === '0') {
							DISPLAY.value = e.srcElement.id
						} else {
							DISPLAY.value += e.srcElement.id
						}
					}
				});
				break;

			// calculation
			case 'act':
				key.addEventListener('click', function (e) {
					if (e.srcElement.id === '/' ||
						e.srcElement.id === '*' ||
						e.srcElement.id === '-' ||
						e.srcElement.id === '+') {
						PrevOperand = DISPLAY.value;
						Operation = e.srcElement.id;
						DISPLAY.value = 0;
					};
				});
				break;

			// result 
			case 'res':
				key.addEventListener('click', function (e) {
					if (e.srcElement.id === '=') {
						if (PrevOperand) {
							let result = calculation(PrevOperand, Operation, DISPLAY.value);
							DISPLAY.value = result;

							PrevOperand = null;
							Operation = null;
						}
					}
				});
				break;

			// clear 
			case 'clr':
				key.addEventListener('click', function (e) {
					if (e.srcElement.id === 'c') {
						DISPLAY.value = 0;
						PrevOperand = null;
						Operation = null;
					}
				});
				break;
		};
	};

}