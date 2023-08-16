export function ajaxSend() {
  // Находим все формы на странице
  var forms = document.querySelectorAll('form');

  // Перебираем все формы
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];

    // Добавляем обработчик события отправки формы
    form.addEventListener('submit', function (event) {
      // Отменяем стандартное действие отправки формы
      event.preventDefault();

      // Получаем данные текущей формы
      var name = this.elements.client.value;
      var phone = this.elements.phone.value;

      // Проверяем, что номер телефона соответствует формату российского номера
      // if (!validatePhone(phone)) {
      //   alert('Пожалуйста, введите корректный номер телефона.');
      //   return;
      //}

      // Создаем объект FormData для отправки данных на сервер
      var formData = new FormData();
      formData.append('client', name);
      formData.append('phone', phone);

      // Создаем AJAX-запрос
      var xhr = new XMLHttpRequest();
      xhr.open('POST', this.action, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Переходим на другую страницу после успешной отправки данных
          //window.location.href = '/success';
          //console.log('donw');
        }
      };

      // Отправляем данные на сервер
      xhr.send(formData);
    });
  }
}
