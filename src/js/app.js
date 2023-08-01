
import * as functions from "./modules/functions.js";
import * as sideMenu from "./modules/side-menu.js";
import * as phoneinput from "./modules/phone-validate.js";
import * as ajax from "./modules/ajax.js";
//import * as slider from "./modules/slider.js";
//import * as popup from "./modules/popup.js";
//import * as doNotificationToast from "./modules/notification-toast.js";
//import * as accordion from "./modules/accordion.js";


document.addEventListener('DOMContentLoaded', function () { //dom is ready
  functions.isWebp();
  sideMenu.sideMenu();
  phoneinput.phoneInput();
  ajax.ajaxSend();
  //slider.renderSlider();
  //popup.renderPopup();
  //doNotificationToast.doNotificationToast();
  //accordion.accordion();
});




