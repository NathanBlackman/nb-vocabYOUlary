const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="card-form"></div>
  <div id="main-container">
    <div id="card-container"></div>
  </div>`;
};

export default domBuilder;
