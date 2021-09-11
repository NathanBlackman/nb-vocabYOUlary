import navbarEvents from '../events/navbarEvents';
import domBuilder from '../forms/domBuilder';
import navBar from '../forms/navbar';

const startApp = () => {
  domBuilder();
  navBar();
  navbarEvents();
};

export default startApp;
