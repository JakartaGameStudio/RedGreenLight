export class Background {
  height: number;
  width: number;
  color: string;

  constructor(params: { color: string; height: number; width: number }) {
    this.color = params.color;
    this.height = params.height;
    this.width = params.width;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.width, this.height);
  }
}
