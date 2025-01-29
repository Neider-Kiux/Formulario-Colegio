document.getElementById('telefono_acudiente').addEventListener('input', (event) => {
  if (event.target.value.length > 10) {
    event.target.value = event.target.value.slice(0, 10);
  }
});

document.getElementById('Form_1').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  console.log(JSON.stringify(jsonData));
  [...document.getElementsByTagName('input')].forEach((element) => {
    element.value = '';
  });
});
