import { timer } from "./counter";

const startBtn: HTMLElement | null = document.querySelector('.start-stop_counter');
startBtn?.addEventListener('click', () => {
  timer();
})