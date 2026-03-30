let isRunning: boolean = false;

function secsCounter(arg: HTMLElement) : void {
  let counter: number = 0;
  arg.textContent = '00'; 
  let secInterval = setInterval(() => {
    counter++
    arg.textContent = counter < 10 ? `0${counter}` : `${counter}`;

    if (counter === 10) {
      stopSecsCounter(secInterval);
      counter = 0;
      secsCounter(arg)
    }
  }, 1000)
}

function stopSecsCounter(arg: number | null) {
  if (arg) {
    clearInterval(arg);
    arg = null;
  }
}

function minCounter(arg: HTMLElement) : void {
  let counter: number = 0;

  let minInterval = setInterval(() => {
    counter++;
    arg.textContent = counter < 10 ? `0${counter}` : `${counter}`;

    if (counter === 5) {
      stopMinCounter(minInterval);
      counter = 0;
    }
  }, 10000);
}

function stopMinCounter(arg: number | null) {
  if (arg) {
    clearInterval(arg);
    arg = null;
  }
}

export const minutes: HTMLElement | null = document.querySelector('.minutes');
export const seconds: HTMLElement | null = document.querySelector('.seconds');

export function timer(): void {
  if (!minutes || !seconds) {
    return;  // если один из элементов не существует — выходим
  }

  isRunning = true;

  if (minutes.textContent === '00' 
    && seconds.textContent === '00') {
      secsCounter(seconds!);
      minCounter(minutes!);
  } 
}

export function stopTimer(): void {
  isRunning = false;
}

