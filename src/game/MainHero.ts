import { Hero, IHero } from './Hero';

export interface IMainHero extends IHero {
  boost: number;
  deboost: number;
  loseStyle: {
    fill: string;
    stroke: string;
  };
  mainStyle: {
    fill: string;
    stroke: string;
  };
  radius: number;
  x: number;
  y: number;
}

export class MainHero extends Hero {
  mainStyle: {
    fill: string;
    stroke: string;
  };

  loseStyle: {
    fill: string;
    stroke: string;
  };

  constructor(params: IMainHero) {
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
