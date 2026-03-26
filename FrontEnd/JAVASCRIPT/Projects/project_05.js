const div = document.getElementById('clock');
setInterval(()=> {
    const time = new Date();
    div.textContent = time.toLocaleTimeString()
},1000)  // 2nd arg is millisecond it represents that after that many ms the function will call it again
