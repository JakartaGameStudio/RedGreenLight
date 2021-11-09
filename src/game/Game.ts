export class Game {
  render: () => void;
  logic: (timeFraction: number) => void;
  beforeStart: () => void;
  clear: () => void;
  constructor(props: {
    render: () => void;
    logic: (timeFraction: number) => void;
    beforeStart: () => void;
    clear: () => void;
  }) {
    this.logic = props.logic;
    this.render = props.render;
    this.beforeStart = props.beforeStart;
    this.clear = props.clear;
  }

  run() {
    let lastTime = 0;

    const animate = (time: number) => {
      const timeFraction = time - (lastTime || time);
      lastTime = time;
      this.clear();
      this.logic(timeFraction);
      this.render();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  start() {
    this.beforeStart();
    this.run();
  }
}
