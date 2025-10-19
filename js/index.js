import { AnimeMain} from "./classAnime.js";
const animeClass = new AnimeMain();

document.addEventListener("DOMContentLoaded", ()=> {
    let txtAll = document.querySelectorAll("#time span");
    timeClass.initTime(txtAll);
})

class TimeMain {
    initTime(timeArr) {
        setInterval(() => {
            this.updateTime(timeArr);
        }, 1000)
    }

    updateTime(timeArr) {
        const rightNow = new Date();
        timeArr.forEach((elm, index) => {
           (index === 0) ? this.timeHelper(elm, rightNow, { hour: "2-digit" })
            : (index === 1) ? this.timeHelper(elm, rightNow, { minute: "2-digit" })
            :  this.timeHelper(elm, rightNow, { second: "2-digit" });
            
        });
    }

    timeHelper(elem, time, option) {
        let currentTxt = elem.textContent;
        elem.textContent =  Object.keys(option).includes("hour") ? time.toLocaleTimeString("default", option).replace("AM", "").replace("PM", "") : time.toLocaleTimeString("default", option);
        if (Math.round(currentTxt) < time.toLocaleTimeString("default", option)) {
            animeClass.drop(elem)
        } 
        if (Object.keys(option).includes("second")) {
            animeClass.drop(elem)
        }
    }    
}
const timeClass = new TimeMain();

function getKey(map, searchkey) {
    for (const [key, value] of map) {
        if (key === searchkey)
            return key;
    }
}


