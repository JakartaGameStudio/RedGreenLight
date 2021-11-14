export class Hero {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  inBoost: boolean;
  boost: number;
  speed: number;
  isLost: boolean;
  isWin: boolean;
  deboost: number;

  constructor(props: { boost: number; deboost: number; radius: number; x: number; y: number }) {
    this.x = this.baseX = props.x;
    this.y = this.baseY = props.y;
    this.radius = props.radius;
    this.boost = props.boost;
    this.deboost = props.deboost;
    this.inBoost = false;
    this.speed = 0;
    this.isLost = false;
    this.isWin = false;
  }

  get leftBorder() {
    return this.x - this.radius / 2;
  }

  move(timeFraction: number) {
    if (!this.inBoost && this.speed < 0) {
      return;
    }

    if (this.inBoost) {
      this.speed += timeFraction * this.boost;
    } else {
      this.speed -= timeFraction * this.deboost;
    }

    this.x += timeFraction * this.speed;
  }

  public startBoost() {
    if (!this.isLost) {
      this.inBoost = true;
    }
  }

  public endBoost() {
    this.inBoost = false;
  }

  public refresh() {
    this.inBoost = false;
    this.speed = 0;
    this.isLost = false;
    this.isWin = false;
    this.x = this.baseX;
    this.y = this.baseY;
  }
}
