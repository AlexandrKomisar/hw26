let carInfo = {
  manufacturer: "Tesla",
  model: "Model S",
  year: 2012,
  speed: 130,


  journey(s = 0) {
    let time;
    time = s / this.speed;
    let rest = Math.floor(time / 4);
    time = time + rest;
    return time;
  },
  pretifyJourney(time) {
    let h = Math.floor(time);
    let m = Math.floor((time - h ) * 60);
    let s = Math.floor(((time - h) * 60 - Math.floor((time - h) * 60)) * 60);
    return `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`;
  }
};
console.log(carInfo );
console.log(carInfo.pretifyJourney(carInfo.journey(s = 1300)));

