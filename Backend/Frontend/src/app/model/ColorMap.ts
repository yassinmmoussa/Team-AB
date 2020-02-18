export class ColorMap {
  static ESSE = '#003366';
  static MECH = '#CC3333';
  static CIVL = '#339999';
  static EECS = '#993366';
  static ENG = '#E1AA12';

  static getColor(dept: string): string {
    const upperDept = dept.toUpperCase();
    switch (upperDept) {
      case 'ESSE':
        return this.ESSE;
      case 'MECH':
        return this.MECH;
      case 'CIVL':
        return this.CIVL;
      case 'EECS':
        return this.EECS;
      case 'ENG':
        return this.ENG;
      default:
        return '#FFFFFF';
    }
  }
}
