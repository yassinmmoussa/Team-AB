export class ColorMap {
  static ESSE = '#003366';
  static MECH = '#CC3333';
  static CIVL = '#339999';
  static EECS = '#993366';
  static ENG = '#E1AA12';

  getColor(dept: string): string {
    const upperDept = dept.toUpperCase();
    switch (upperDept) {
      case 'ESSE':
        return ColorMap.ESSE;
      case 'MECH':
        return ColorMap.MECH;
      case 'CIVL':
        return ColorMap.CIVL;
      case 'EECS':
        return ColorMap.EECS;
      case 'ENG':
        return ColorMap.ENG;
      default:
        return '#FFFFFF';
    }
  }

  getLighterColor(dept: string): string {
    return this.getColor(dept) + '40';
  }
}
