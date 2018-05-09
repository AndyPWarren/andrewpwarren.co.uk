'use strict';
const ranges = [
  {
    start: 0,
    end: 12,
    text: 'morning',
    cssClass: 'morning'
  },
  {
    start: 12,
    end: 18,
    text: 'afternoon',
    cssClass: 'afternoon'
  },
  {
    start: 18,
    end: 24,
    text: 'evening',
    cssClass: 'evening'
  }
];

export default class TodModule {

  getHr() {
    return new Date().getHours();
  };

  getRange() {
    const hour = this.getHr();
    return ranges.filter((range) => {
      if ((hour >= range.start) && (hour < range.end)) {
        return range;
      }
    })[0];
  }
};
