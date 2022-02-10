export class Game {
  public render: () => void;
  public logic: (timeFraction: number) => void;
  public beforeStart: () => void;
  public clear: () => void;
  public restart: () => void;
  private requestID: number;
  private run() {
    let lastTime = 0;
    const animate = (time: number) => {
      const timeFraction = time - (lastTime || time);

      lastTime = time;
      this.clear();
      this.logic(timeFraction);
      this.render();
      this.requestID = requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  public start() {
    this.beforeStart();
    this.run();
  }

  public reload() {
    this.clearAnimate();
    this.run();
  }

  public clearAnimate() {
    cancelAnimationFrame(this.requestID);
  }
}
