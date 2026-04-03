import './style.css';

document.body.innerHTML = 
`
    <div class="pomodoro_cont">
      <img class="pomodoro-pic" src="../src/assets/pomodoro.png" alt="">
      <div class="pomodoro-content">
        <h1 class="pomodoro">Pomodoro</h1>
        <p class="pomodoro-timer"><span class="minutes">00</span>
           : <span class="seconds">00</span></p>
      </div>
      <button class="start-stop_counter">Start</button>
    </div>
`