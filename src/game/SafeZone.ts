interface ISafeZone {
  color: string;
  heightGame: number;
  lengthDistance: number;
  widthGame: number;
}

export class SafeZone implements ISafeZone {
  widthGame: number;
  heightGame: number;
  color: string;
  lengthDistance: number;

  constructor(params: ISafeZone) {
    this.color = params.color;
    this.heightGame = params.heightGame;
    this.widthGame = params.widthGame;
    this.lengthDistance = params.lengthDistance;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.lengthDistance, 0, this.widthGame, this.heightGame);
  }
}
