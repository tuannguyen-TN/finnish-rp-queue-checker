const checkForm = document.getElementById('queueForm');

checkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  document.getElementById('queueNumber').textContent = 'Loading...';

  const diaryNumber = document.getElementById('diaryNumber');

  if (diaryNumber.value == '' || diaryNumber.value.length != 14) {
    alert('Please enter an appropriate diary number!');
  } else {
    let queueNumber = 0;

    fetch('http://0.0.0.0:8000/check/' + diaryNumber.value)
      .then((res) => res.json())
      .then((data) => {
        queueNumber = data.queue_num;
        document.getElementById('queueNumber').textContent =
          'The application status with this diary number is: ' + queueNumber;
      })
      .catch(
        (err) =>
          (document.getElementById('queueNumber').textContent =
            'The request was not successful. Try again!')
      );
  }

  diaryNumber.value = '';
});
