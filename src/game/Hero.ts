export interface IHero {
  boost: number;
  deboost: number;
  maxSpeed: number;
  radius: number;
  x: number;
  y: number;
}

export class Hero implements IHero {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  directionX: number;
  directionY: number;
  radius: number;
  inBoost: boolean;
  boost: number;
  speed: number;
  isLost: boolean;
  isWon: boolean;
  deboost: number;
  maxSpeed: number;

  constructor(props: IHero) {
    this.x = this.baseX = props.x;
    this.y = this.baseY = props.y;
    this.radius = props.radius;
    this.boost = props.boost;
    this.deboost = props.deboost;
    this.inBoost = false;
    this.speed = 0;
    this.isLost = false;
    this.isWon = false;
    this.directionX = 0;
    this.directionY = 0;
    this.maxSpeed = props.maxSpeed;
  }

  get leftBorder() {
    return this.x - this.radius / 2;
  }

  set direction(coord: { x: number; y: number }) {
    const sinA =
      (coord.y - this.y) /
        Math.sqrt(Math.pow(coord.y - this.y, 2) + Math.pow(coord.x - this.x, 2)) || 0;
    const cosA = Math.sqrt(1 - Math.pow(sinA, 2)) || 0;

    this.directionX = cosA;
    this.directionY = sinA;
  }

  move(timeFraction: number) {
    if ((!this.inBoost && this.speed < 0) || this.isLost || this.isWon) {
      return;
    }

    const speedBefore = this.speed;

    if (this.inBoost) {
      this.speed += timeFraction * this.boost;
    } else {
      this.speed -= timeFraction * this.deboost;
    }

    if (this.maxSpeed < this.speed) {
      this.speed = speedBefore;
    }

    this.x += timeFraction * this.speed * this.directionX;
    this.y += timeFraction * this.speed * this.directionY;
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
    this.isWon = false;
    this.x = this.baseX;
    this.y = this.baseY;
  }
}
