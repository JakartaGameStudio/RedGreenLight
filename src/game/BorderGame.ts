export class BorderGame {
  color: string;
  width: number;
  height: number;

  constructor(params: { height: number; width: number }) {
    this.color = '#000';
    this.width = params.width;
    this.height = params.height;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.width, 0);
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.lineTo(0, 0);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }
}
