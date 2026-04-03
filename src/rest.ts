import { timer } from "./counter";

let secRestIntervalUnit: number | null = null;
let minRestIntervalUnit: number | null = null;

function secsCounter(arg: HTMLElement) : number {
  let counter: number = 0;
  arg.textContent = '00'; 
  secRestIntervalUnit = setInterval(() => {
    counter++
    arg.textContent = counter < 10 ? `0${counter}` : `${counter}`;

    if (counter === 60) {
      stopSecsCounter();
      counter = 0;
      secsCounter(arg)
    }
  }, 1000)
  return secRestIntervalUnit
}

function stopSecsCounter() {
  if (secRestIntervalUnit !== null) {
    clearInterval(secRestIntervalUnit);
    secRestIntervalUnit = null;
  }
}

function minCounter(arg: HTMLElement) : number {
  let counter: number = 0;

  minRestIntervalUnit = setInterval(() => {
    counter++;
    arg.textContent = counter < 10 ? `0${counter}` : `${counter}`;

    if (counter === 25) {
      alert('rest is over!')
      stopRestTimer()
      counter = 0;
      timer();
    }
  }, 10000);
  return minRestIntervalUnit
}

function stopMinCounter() {
  if (minRestIntervalUnit !== null) {
    clearInterval(minRestIntervalUnit);
    minRestIntervalUnit = null;
  }
}

export const minutes: HTMLElement | null = document.querySelector('.minutes');
export const seconds: HTMLElement | null = document.querySelector('.seconds');

export function Resttimer(): void {
  if (!minutes || !seconds) {
    return
  }

  secsCounter(seconds!);
  minCounter(minutes!); 
}

export function stopRestTimer(): void {
  stopSecsCounter();
  stopMinCounter();

  if (!minutes || !seconds) {
    return
  }

  minutes.textContent = '00';
  seconds.textContent = '00';
}