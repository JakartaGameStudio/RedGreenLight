interface IBackground {
  color: string;
  height: number;
  width: number;
}

export class Background implements IBackground {
  height: number;
  width: number;
  color: string;

  constructor(params: IBackground) {
    this.color = params.color;
    this.height = params.height;
    this.width = params.width;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.width, this.height);
  }
}
