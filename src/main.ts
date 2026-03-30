import { timer, stopTimer } from "./counter";

export const startBtn: HTMLElement | null = document.querySelector('.start-stop_counter');
startBtn?.addEventListener('click', () => {
  if (!startBtn) return;
 
  if (startBtn.textContent === 'Start') {
    startBtn.textContent = 'Reset';
    timer();
  } else if (startBtn.textContent === 'Reset') {
    stopTimer();
    startBtn.textContent = 'Start'
  }
})