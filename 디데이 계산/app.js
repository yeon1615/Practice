const dDayContainer = document.getElementById('dDay');

function dDay() {
  const xMas = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  const diff = xMas - now;

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    '0'
  );
  const min = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const sec = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  dDayContainer.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

dDay();
setInterval(dDay, 1000);
