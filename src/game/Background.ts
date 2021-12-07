export class Background {
  height: number;
  widht: number;
  color: string;

  constructor(params: { color: string; height: number; widht: number }) {
    this.color = params.color;
    this.height = params.height;
    this.widht = params.widht;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.widht, this.height);
  }
}
