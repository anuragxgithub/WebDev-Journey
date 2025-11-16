const timer = document.getElementById("timer");

const olympicTime = new Date(2028, 6, 14).getTime();  // gives time in milliseconds for July 14, 2028 (Note month is 0-indexed)


setInterval(()=> {
    const currentTime = Date.now(); // gives current time in milliseconds from a specific date(Jan 1, 1970)
    // from the above milliseconds we can calculate the date and time.
    let remainingTimeInMs = olympicTime-currentTime;
    const day = Math.floor(remainingTimeInMs/(1000*60*60*24));
    remainingTimeInMs = remainingTimeInMs%(1000*60*60*24);
    // bz lets say 115 min -> 115 / 60 = 1... hr and then 115%60 = 55min remaining
    // now from remaining ms calculate hr
    const hour = Math.floor(remainingTimeInMs/(1000*60*60));
    remainingTimeInMs = remainingTimeInMs%(1000*60*60);
    const minute = Math.floor(remainingTimeInMs/(1000*60));
    remainingTimeInMs = remainingTimeInMs%(1000*60);
    const second = Math.floor(remainingTimeInMs/(1000));
    remainingTimeInMs = remainingTimeInMs%(1000);

    timer.textContent = `${day}: Days ${hour}: hours ${minute}: minutes ${second}: seconds`;
}, 1000);
