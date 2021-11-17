export class FinishLine {
  lengthDistance: number;
  height: number;
  color: string;

  constructor(params: { height: number; lengthDistance: number }) {
    this.color = '#000';
    this.lengthDistance = params.lengthDistance;
    this.height = params.height;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.lengthDistance, 0);
    ctx.lineTo(this.lengthDistance, this.height);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }
}
