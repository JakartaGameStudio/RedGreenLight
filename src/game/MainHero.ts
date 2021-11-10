import { Hero } from './Hero';

export class MainHero extends Hero {
  mainStyle: {
    stroke: string;
    fill: string;
  };

  loseStyle: {
    stroke: string;
    fill: string;
  };

  constructor(params: {
    x: number;
    y: number;
    radius: number;
    boost: number;
    deboost: number;
    mainStyle: {
      stroke: string;
      fill: string;
    };
    loseStyle: {
      stroke: string;
      fill: string;
    };
  }) {
    super(params);
    this.mainStyle = params.mainStyle;
    this.loseStyle = params.loseStyle;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    if (this.isLost) {
      ctx.strokeStyle = this.loseStyle.stroke;
      ctx.fillStyle = this.loseStyle.fill;
    } else {
      ctx.strokeStyle = this.mainStyle.stroke;
      ctx.fillStyle = this.mainStyle.fill;
    }

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
