export class Course {

  constructor(
    public duration: number,
    public dept: string,
    public instructor: string,
    public code: number,
    public startingBlock: number,
    public colour: string,
    public name: string,
    public section: string,
    public days: [number],
    public year: number,
    public session: string,
    public type: string,
    public labSection?: string,
    public capacity: number = 0,
    public room: string = 'Not Set'
  ) {}

  daysOut(): string {
    let res = '';
    this.days.forEach((day, i) => {
      switch (day) {
        case 0:
          res += 'M';
          break;
        case 1:
          res += 'T';
          break;
        case 2:
          res += 'W';
          break;
        case 3:
          res += 'Th';
          break;
        case 4:
          res += 'F';
          break;
        default:
          break;
      }
      if (i !== this.days.length - 1) {
        res += ',';
      }
    });
    return res;
  }

  startTime(): string {
    return '' + this.blockToTime(this.startingBlock);
  }

  endTime(): string {
    return '' + this.blockToTime(this.startingBlock + this.duration + 1);
  }

  blockToTime(blockNo: number): string {
    let minute = '';
    let hour = '';
    let ampm = '';
    // Hour

    // 2: 2/2 = (1 + 7) % 12 = 8 + 1
    hour = '' + (((Math.floor(blockNo / 2) + 7) % 12) + 1);

    // Minute
    if (blockNo % 2 === 0) {
      minute = '00';
    } else {
      minute = '30';
    }

    // ampm
    if (blockNo >= 8) {
      ampm = 'pm';
    } else {
      ampm = 'am';
    }

    const formattedEnding = (minute === '00') ? ampm : ':' + minute + ampm;
    return hour + formattedEnding;
  }

  innerContainerColour(): string {
    const lessOpaqueHex = this.colour + '40';
    return lessOpaqueHex;
  }
}
