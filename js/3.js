let time = {
    hours: 1,
    minutes: 1,
    seconds: 1,
    days: 0,

    show() {
        alert(`${this.days}:${this.hours}:${this.minutes}:${this.seconds}`);
    },

    changeSeconds(sec) {
        let h = sec / 3600;
        this.hours += Math.floor(h);
        let m = (sec - Math.floor(h) * 3600) / 60;
        this.minutes += Math.floor(m);
        this.seconds += sec - Math.floor(h) * 3600 - Math.floor(m) * 60;

        let d = 0;
        if (this.seconds >= 60) {
            this.seconds %= 60;
            this.minutes += Math.floor(this.seconds / 60);
        }
        if (this.minutes >= 60) {
            this.minutes %= 60;
            this.hours += Math.floor(this.minutes / 60);
        }
        if (this.hours > 23) {
            this.hours %= 24;
            this.days = Math.floor(this.hours / 24);
        }
        return time;
    },

    changeMinutes(min) {
        let h = min / 60;
        this.hours += Math.floor(h);
        this.minutes += min - Math.floor(h) * 60;
        if (this.minutes >= 60) {
            this.minutes %= 60;
            this.hours += Math.floor(h / 60);
        }
        if (this.hours > 23) {
            this.hours %= 24;
            this.days = Math.floor(this.hours / 24);
        }
        return time;
    },

    changeHours(hour) {
        this.hours = (this.hours + hour) % 24;
        let d = 0;
        if (this.hours > 23) {
            this.days = Math.floor(this.hours / 24);
        }
        return time;
    }
};

time.hours = +prompt("Enter hours", 0);
time.minutes = +prompt("Enter minutes", 0);
time.seconds = +prompt("Enter seconds", 0);

time.show();
console.log(time.changeSeconds(3600));
time.show();
console.log(time.changeMinutes(1400));
time.show();
console.log(time.changeHours(45));
time.show();
