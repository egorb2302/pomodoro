function secsCounter(arg: HTMLElement) : void {
  let counter: number = 0;
  let secInterval = () => {
    arg.textContent = '0'; 
    let secintInt = setInterval(() => {
      counter++
      arg.textContent = `${counter}`;

      if (counter === 60) {
        clearInterval(secintInt);
        counter = 0;
        secInterval();
      }
    }, 1000)    
  }
  secInterval()
}

function minCounter(arg: HTMLElement) : void {
  let counter: number = 0;

  setInterval(() => {
    counter++;
    arg.textContent = `${counter}`;
  }, 60000);
}

export function timer(): void {
  const minutes: HTMLElement | null = document.querySelector('.minutes');
  const seconds: HTMLElement | null = document.querySelector('.seconds');

  secsCounter(seconds!);
  minCounter(minutes!);
}

