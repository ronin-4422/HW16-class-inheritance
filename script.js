class Clock {
  constructor() {
    this.clockTime = document.getElementById('clockTime')
  }

  getTime() {
    return new Date();
  }

  start() {
    this.interval = setInterval(this.render.bind(this), 300)
  }

  stop() {
    clearInterval(this.interval);
  }

  render() {
    this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();           
    this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();  
    this.seconds = this.getTime().getSeconds() < 10 ? '0' + this.getTime().getSeconds() : this.getTime().getSeconds();
    this.clockTime.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds;             
  }
}

let clock = new Clock();

class ClockShortFormat extends Clock {
  constructor() {
    super();
  };
  render() {
    this.clockTime.innerHTML = this.getTime().getHours() + ":" + this.getTime().getMinutes() + ":" + this.getTime().getSeconds();     
  }
}

class ClockFullFormat extends Clock {
  constructor() {
    super();
  };
  render() {
    this.clockTime.innerHTML = this.getTime().getHours() + ":" + this.getTime().getMinutes();
  }
}

let clockShortFormat = new ClockShortFormat();
let clockFullFormat = new ClockFullFormat();

clockFullFormat.start();

class ChangeClock extends Clock {
  constructor() {
    super();
  };
  view () {
    this.clockTime.addEventListener('click', () => {
      this.clockTime.classList.toggle('shortFormat');
      if (this.clockTime.classList.contains('shortFormat')) {   
        clockFullFormat.start();
        clockShortFormat.stop();
      } else {
        clockShortFormat.start();
        clockFullFormat.stop();
      };
    });
  }
}

let changeClock = new ChangeClock();

changeClock.view();