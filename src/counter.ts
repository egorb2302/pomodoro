import { Resttimer } from "./rest";

let secIntervalUnit: number | null = null;
let minIntervalUnit: number | null = null;

function secsCounter(arg: HTMLElement) : number {
  let counter: number = 0;
  arg.textContent = '00'; 
  secIntervalUnit = setInterval(() => {
    counter++
    arg.textContent = counter < 10 ? `0${counter}` : `${counter}`;

    if (counter === 60) {
      stopSecsCounter();
      counter = 0;
      secsCounter(arg)
    }
  }, 1000)
  return secIntervalUnit
}

function stopSecsCounter() {
  if (secIntervalUnit !== null) {
    clearInterval(secIntervalUnit);
    secIntervalUnit = null;
  }
}

function minCounter(arg: HTMLElement) : number {
  let counter: number = 0;

  minIntervalUnit = setInterval(() => {
    counter++;
    arg.textContent = counter < 10 ? `0${counter}` : `${counter}`;

    if (counter === 25) {
      alert('time to rest!')
      // stopMinCounter();
      stopTimer()
      counter = 0;
      Resttimer();
    }
  }, 10000);
  return minIntervalUnit
}

function stopMinCounter() {
  if (minIntervalUnit !== null) {
    clearInterval(minIntervalUnit);
    minIntervalUnit = null;
  }
}

export const minutes: HTMLElement | null = document.querySelector('.minutes');
export const seconds: HTMLElement | null = document.querySelector('.seconds');

export function timer(): void {
  if (!minutes || !seconds) {
    return
  }

  secsCounter(seconds!);
  minCounter(minutes!); 
}

export function stopTimer(): void {
  stopSecsCounter();
  stopMinCounter();

  if (!minutes || !seconds) {
    return
  }

  minutes.textContent = '00';
  seconds.textContent = '00';
}

