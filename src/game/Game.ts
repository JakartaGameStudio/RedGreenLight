export class Game {
  private render: () => void;
  private logic: (timeFraction: number) => void;
  private beforeStart: () => void;
  private clear: () => void;

  constructor(props: {
    beforeStart: () => void;
    clear: () => void;
    logic: (timeFraction: number) => void;
    render: () => void;
  }) {
    this.logic = props.logic;
    this.render = props.render;
    this.beforeStart = props.beforeStart;
    this.clear = props.clear;
  }

  private run() {
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

  public start() {
    this.beforeStart();
    this.run();
  }
}
