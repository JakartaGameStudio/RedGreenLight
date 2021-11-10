export class Hero {
  x: number;
  y: number;
  radius: number;
  inBoost: boolean;
  boost: number;
  speed: number;
  isLost: boolean;
  deboost: number;

  constructor(props: { x: number; y: number; radius: number; boost: number; deboost: number }) {
    this.x = props.x;
    this.y = props.y;
    this.radius = props.radius;
    this.inBoost = false;
    this.boost = props.boost;
    this.deboost = props.deboost;
    this.speed = 0;
    this.isLost = false;
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
    this.inBoost = true;
  }

  public endBoost() {
    this.inBoost = false;
  }

  public checkStop() {
    if (this.speed > 0) {
      this.isLost = true;
    }
  }
}
