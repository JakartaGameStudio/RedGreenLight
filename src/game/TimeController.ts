export class TimeController {
  stopAllowedMoveTime: number;
  realTime: number;
  stopSafePeriod: number;
  stopTimeout: number;
  timeoutValue: number | (() => number);
  safePeriodValue: number | (() => number);
  allowedMoveTimeValue: number | (() => number);

  constructor(obj: {
    allowedMoveTime: number | (() => number);
    safePeriod: number | (() => number);
    timeout: number | (() => number);
  }) {
    this.timeoutValue = obj.timeout;
    this.safePeriodValue = obj.safePeriod;
    this.allowedMoveTimeValue = obj.allowedMoveTime;
    this.stopAllowedMoveTime = 0;
    this.realTime = 0;
    this.stopSafePeriod = 0;
    this.stopTimeout = 0;
  }

  start() {
    this.reset();
  }

  reset() {
    this.realTime = 0;

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
    return this.realTime < this.stopAllowedMoveTime;
  }

  get safePeriod() {
    return this.realTime > this.stopAllowedMoveTime && this.realTime < this.stopSafePeriod;
  }

  get timeout() {
    return this.realTime > this.stopSafePeriod && this.realTime < this.stopTimeout;
  }

  get timeOver() {
    return this.realTime > this.stopTimeout;
  }

  updateTime(timeFraction: number) {
    this.realTime += timeFraction;
  }
}
