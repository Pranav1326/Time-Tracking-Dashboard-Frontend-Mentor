// Getting title elements of all cards 
let workTitle = document.querySelector("body > div.main > div > div.card-1.card > div.card-1-sec-2 > div.title-icon > h2");
let playTitle = document.querySelector("body > div.main > div > div.card-2.card > div.card-2-sec-2 > div.title-icon > h2");
let studyTitle = document.querySelector("body > div.main > div > div.card-3.card > div.card-3-sec-2 > div.title-icon > h2");
let exerciseTitle = document.querySelector("body > div.main > div > div.card-4.card > div.card-4-sec-2 > div.title-icon > h2");
let socialTitle = document.querySelector("body > div.main > div > div.card-5.card > div.card-5-sec-2 > div.title-icon > h2");
let sFTitle = document.querySelector("body > div.main > div > div.card-6.card > div.card-6-sec-2 > div.title-icon > h2");

// Getting current elements of all cards
let workCurrent = document.querySelector("body > div.main > div > div.card-1.card > div.card-1-sec-2 > div:nth-child(2) > p.work-hour-daily");
let playCurrent = document.querySelector("body > div.main > div > div.card-2.card > div.card-2-sec-2 > div.daily-prev-flex > p.play-hour-daily");
let studyCurrent = document.querySelector("body > div.main > div > div.card-3.card > div.card-3-sec-2 > div.daily-prev-flex > p.study-hour-daily");
let exerciseCurrent = document.querySelector("body > div.main > div > div.card-4.card > div.card-4-sec-2 > div.daily-prev-flex > p.exe-hour-daily");
let socialCurrent = document.querySelector("body > div.main > div > div.card-5.card > div.card-5-sec-2 > div.daily-prev-flex > p.social-hour-daily");
let sFCurrent = document.querySelector("body > div.main > div > div.card-6.card > div.card-6-sec-2 > div.daily-prev-flex > p.sc-hour-daily");

// Getting previous elements of all cards
let workPrevious = document.querySelector("body > div.main > div > div.card-1.card > div.card-1-sec-2 > div.daily-prev-flex > p.work-prev-hour-daily");
let playPrevious = document.querySelector("body > div.main > div > div.card-2.card > div.card-2-sec-2 > div.daily-prev-flex > p.play-prev-hour-daily");
let studyPrevious = document.querySelector("body > div.main > div > div.card-3.card > div.card-3-sec-2 > div.daily-prev-flex > p.study-prev-hour-daily");
let execersicePrevious = document.querySelector("body > div.main > div > div.card-4.card > div.card-4-sec-2 > div.daily-prev-flex > p.exe-prev-hour-daily");
let socialPrevious = document.querySelector("body > div.main > div > div.card-5.card > div.card-5-sec-2 > div.daily-prev-flex > p.social-prev-hour-daily");
let sFPrevious = document.querySelector("body > div.main > div > div.card-6.card > div.card-6-sec-2 > div.daily-prev-flex > p.sc-prev-hour-daily");

// Getting Daily, Weekly and Monthly buttons
let dailyBtn = document.querySelector("body > div.main > div > div.card-0 > div.sec-2 > button:nth-child(1)");
let weeklyBtn = document.querySelector("body > div.main > div > div.card-0 > div.sec-2 > button:nth-child(2)");
let monthlyBtn = document.querySelector("body > div.main > div > div.card-0 > div.sec-2 > button:nth-child(3)");

// Fetching data from the data.json file

let url = "./data.json";
let fetchData = async () => {
    try{
        const data = await fetch(url);
        const resData = await data.json();
        
        // Destructuring data
        const [workData, playData, studyData, execersiceData, socialData, sFData] = resData;
            
        // Updating titles
        workTitle.textContent = workData.title;
        playTitle.textContent = playData.title;
        studyTitle.textContent = studyData.title;
        exerciseTitle.textContent = execersiceData.title;
        socialTitle.textContent = socialData.title;
        sFTitle.textContent = sFData.title;

        // Adding eventlistener to buttons
        // Daily button
        dailyBtn.addEventListener('click',() => {
            // Updating current timeframe
            workCurrent.textContent = workData.timeframes.daily.current + 'hrs';
            playCurrent.textContent = playData.timeframes.daily.current + 'hr';
            studyCurrent.textContent = studyData.timeframes.daily.current + 'hrs';
            exerciseCurrent.textContent = execersiceData.timeframes.daily.current + 'hr';
            socialCurrent.textContent = socialData.timeframes.daily.current + 'hr';
            sFCurrent.textContent = sFData.timeframes.daily.current + 'hrs';

            // Updating Previous timeframe
            workPrevious.textContent = 'Previous - ' + workData.timeframes.daily.previous + 'hrs';
            playPrevious.textContent = 'Previous - ' + playData.timeframes.daily.previous + 'hrs';
            studyPrevious.textContent = 'Previous - ' + studyData.timeframes.daily.previous + 'hr';
            execersicePrevious.textContent = 'Previous - ' + execersiceData.timeframes.daily.previous + 'hr';
            socialPrevious.textContent = 'Previous - ' + socialData.timeframes.daily.previous + 'hrs';
            sFPrevious.textContent = 'Previous - ' + sFData.timeframes.daily.previous + 'hr';
        });
        // Weekly Button
        weeklyBtn.addEventListener('click',() => {
            // Updating current timeframe
            workCurrent.textContent = workData.timeframes.weekly.current + 'hrs';
            playCurrent.textContent = playData.timeframes.weekly.current + 'hrs';
            studyCurrent.textContent = studyData.timeframes.weekly.current + 'hrs';
            exerciseCurrent.textContent = execersiceData.timeframes.weekly.current + 'hrs';
            socialCurrent.textContent = socialData.timeframes.weekly.current + 'hrs';
            sFCurrent.textContent = sFData.timeframes.weekly.current + 'hrs';

            // Updating Previous timeframe
            workPrevious.textContent = 'Previous - ' + workData.timeframes.weekly.previous + 'hrs';
            playPrevious.textContent = 'Previous - ' + playData.timeframes.weekly.previous + 'hrs';
            studyPrevious.textContent = 'Previous - ' + studyData.timeframes.weekly.previous + 'hrs';
            execersicePrevious.textContent = 'Previous - ' + execersiceData.timeframes.weekly.previous + 'hrs';
            socialPrevious.textContent = 'Previous - ' + socialData.timeframes.weekly.previous + 'hrs';
            sFPrevious.textContent = 'Previous - ' + sFData.timeframes.weekly.previous + 'hrs';
        });
        // Monthly Button
        monthlyBtn.addEventListener('click',() => {
            // Updating current timeframe
            workCurrent.textContent = workData.timeframes.monthly.current + 'hrs';
            playCurrent.textContent = playData.timeframes.monthly.current + 'hrs';
            studyCurrent.textContent = studyData.timeframes.monthly.current + 'hrs';
            exerciseCurrent.textContent = execersiceData.timeframes.monthly.current + 'hrs';
            socialCurrent.textContent = socialData.timeframes.monthly.current + 'hrs';
            sFCurrent.textContent = sFData.timeframes.monthly.current + 'hrs';

            // Updating Previous timeframe
            workPrevious.textContent = 'Previous - ' + workData.timeframes.monthly.previous + 'hrs';
            playPrevious.textContent = 'Previous - ' + playData.timeframes.monthly.previous + 'hrs';
            studyPrevious.textContent = 'Previous - ' + studyData.timeframes.monthly.previous + 'hrs';
            execersicePrevious.textContent = 'Previous - ' + execersiceData.timeframes.monthly.previous + 'hrs';
            socialPrevious.textContent = 'Previous - ' + socialData.timeframes.monthly.previous + 'hrs';
            sFPrevious.textContent = 'Previous - ' + sFData.timeframes.monthly.previous + 'hrs';
        });

    }catch(err){
        console.log(err);
    }
}
        
fetchData();
