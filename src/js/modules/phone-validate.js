export function phoneInput() {

  let phoneFields = document.querySelectorAll('input[data-tel-input]');

  const getInputValueNumbers = function (input) {
    return input.value.replace(/\D/g, "");
  };

  const onPhoneInput = function (event) {
    let input = event.target;
    let inputNumbersValue = getInputValueNumbers(input);
    let formattedInputValue = "";
    let cursorStart = input.selectionStart;
    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != cursorStart) {
      if (event.data && /\D/g.test(event.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      //if inputed number 9, to add number of 7 to start string 
      if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;

      let firstCharacter = (inputNumbersValue[0] == '8') ? '8' : '+7';
      formattedInputValue = firstCharacter + " ";

      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      //Not Russia
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = function (event) {
    let input = event.target;
    if (event.keyCode == 8 && getInputValueNumbers(input).length == 1) {
      event.target.value = "";
    }
  };

  const onPhonePaste = function (event) {
    let pastedText = event.clipboardData || window.clipboardData;
    let input = event.target;
    let inputNumbersValue = getInputValueNumbers(input);
    if (pastedText) {
      let copyCurrentText = pastedText.getData('Text');
      if (/\D/g.test(copyCurrentText)) {
        input.value = inputNumbersValue;
      }
    }
  }

  for (let i = 0; i < phoneFields.length; i += 1) {
    let input = phoneFields[i];
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeyDown);
    input.addEventListener('paste', onPhonePaste);
  }

  //Prohibit numeric input
  const valueElement = document.querySelectorAll('input[name="client"]');
  valueElement.forEach(function (input) {
    input.addEventListener('keydown', function (event) {
      if (event.key.match(/[0-9]/)) return event.preventDefault();
    });
    input.addEventListener('input', function (event) {
      input.value = input.value.replace(/[0-9]/g, "")
    });
  });

  /*validate*/
  const validateFields = function (item) {
    item.addEventListener('input', function () {
      const parentEl = item.closest('form');
      const buttonSubmit = parentEl.querySelector('button[type="submit"]');
      //const inputPhone = parentEl.querySelector('input[name="phone"]');

      if (item.name === 'client') {
        if (item.value.length < 2) {
          item.classList.add('form-error');
        } else if (item.value.length >= 2) {
          item.classList.remove('form-error');
        }
      }
      if (item.name === 'phone') {
        const itemNew = item.value.replace(/[^\d]/g, '');
        if (itemNew.length === null || itemNew.length < 11) {
          item.classList.add('form-error');
          buttonSubmit.disabled = true;
        } else if (itemNew.length >= 11) {
          item.classList.remove('form-error');
          buttonSubmit.disabled = false;
        }
      }

    });
  };

  const allInputFields = document.querySelectorAll('input');
  allInputFields.forEach(function (input) {
    validateFields(input);
  });

}