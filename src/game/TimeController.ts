export class TimeController {
  stopAllowedMoveTime: number;
  currentTime: number;
  cycleTime: number;
  stopSafePeriod: number;
  stopTimeout: number;
  timeoutValue: number | (() => number);
  safePeriodValue: number | (() => number);
  allowedMoveTimeValue: number | (() => number);
  totalTime: number;
  isStop: boolean;

  constructor(obj: {
    allowedMoveTime: number | (() => number);
    safePeriod: number | (() => number);
    timeout: number | (() => number);
    totalTime: number;
  }) {
    this.timeoutValue = obj.timeout;
    this.safePeriodValue = obj.safePeriod;
    this.allowedMoveTimeValue = obj.allowedMoveTime;
    this.totalTime = obj.totalTime;
    this.stopAllowedMoveTime = 0;
    this.cycleTime = 0;
    this.stopSafePeriod = 0;
    this.stopTimeout = 0;
    this.currentTime = 0;
    this.isStop = false;
  }

  start() {
    this.reset();
  }

  reset() {
    this.cycleTime = 0;

    this.stopAllowedMoveTime =
      typeof this.allowedMoveTimeValue === 'number'
        ? this.allowedMoveTimeValue
        : this.allowedMoveTimeValue();

    this.stopSafePeriod =
      this.stopAllowedMoveTime +
      (typeof this.safePeriodValue === 'number' ? this.safePeriodValue : this.safePeriodValue());

    this.stopTimeout =
      this.stopSafePeriod +
      (typeof this.timeoutValue === 'number' ? this.timeoutValue : this.timeoutValue());
  }

  get allowedMove() {
    return this.cycleTime < this.stopAllowedMoveTime;
  }

  get safePeriod() {
    return this.cycleTime > this.stopAllowedMoveTime && this.cycleTime < this.stopSafePeriod;
  }

  get timeout() {
    return this.cycleTime > this.stopSafePeriod && this.cycleTime < this.stopTimeout;
  }

  get timeOver() {
    return this.cycleTime > this.stopTimeout;
  }

  get endTime() {
    return this.totalTime <= this.currentTime;
  }

  get remainingTime() {
    const remainingTime = this.totalTime - this.currentTime;

    return remainingTime > 0 ? remainingTime : 0;
  }

  updateTime(timeFraction: number) {
    if (!this.isStop) {
      this.cycleTime += timeFraction;
      this.currentTime += timeFraction;
    }
  }

  stop() {
    this.isStop = true;
  }

  restart() {
    this.reset();
    this.currentTime = 0;
    this.isStop = false;
  }
}
