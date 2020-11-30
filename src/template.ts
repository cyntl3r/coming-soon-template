/**
 * Coming Soon, 2020
 * @author cyntl3r <damian@cyntler.com>
 */
import moment from 'moment';

let interval = null;

const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

const time = moment.utc(new Date('{{ countdownDate }}')).valueOf();

const countdown = () => {
  console.log(10000);
  const now = moment.utc().valueOf();

  if (now >= time) {
    clearInterval(interval);
    return;
  }

  const distance = time - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days !== NaN && hours !== NaN && minutes !== NaN && seconds !== NaN) {
    daysElement.textContent = days.toString();
    hoursElement.textContent = hours.toString();
    minutesElement.textContent = minutes.toString();
    secondsElement.textContent = seconds.toString();
  }
};

const show = () => {
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('visible');
  }
};

interval = setInterval(countdown, 1000);
countdown();
setTimeout(() => {
  show();
}, 100);
