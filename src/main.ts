import { timer, stopTimer } from "./counter";
import { stopRestTimer } from "./rest";

export const startBtn: HTMLElement | null = document.querySelector('.start-stop_counter');
startBtn?.addEventListener('click', () => {
  if (!startBtn) return;
 
  if (startBtn.textContent === 'Start') {
    startBtn.textContent = 'Reset';
    timer();
  } else if (startBtn.textContent === 'Reset') {
    stopTimer();
    stopRestTimer();
    startBtn.textContent = 'Start'
  }
})