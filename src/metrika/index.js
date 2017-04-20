
class Metrika {

  constructor(id) {
    this.id = id;
    this.counter = null;
  }

  init(){
    this.getCounter();
  }

  getCounter(){
    const counterInteval = setInterval(() => {
      const counter = window['yaCounter' + this.id];

      if(counter){
        this.counter = window.yaCounter41576979;
        window.app.counter = this.counter;
        console.info('counter created');

        clearInterval(counterInteval);
      }

    }, 1000);
  }
}

const metrika = new Metrika(41576979)

metrika.init();

export default metrika;
