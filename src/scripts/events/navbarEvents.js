import newCardForm from '../forms/vocabForm';
import clearDom from './clearDom';

// When the 'new card' button is pushed in the navbar make it create a form
const navbarEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      clearDom();
      newCardForm();
    }
  });
};

export default navbarEvents;
