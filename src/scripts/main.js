// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/router';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
