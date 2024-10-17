// const log = setTimeout(() => {
//     console.log('Hello World');
// }, 5000)

// const time = setInterval(()=>{
//     console.log('hello world')
// }, 1000)

// const timeOff = setTimeout(()=>{
//     clearInterval(time)
// }, 5000)

let hours = document.querySelector('.hours-text')
let minut = document.querySelector('.minut-text')
let second = document.querySelector('.second-text')

setInterval(() => {
    let data = new Date()

    let timeSecond
    if(data.getSeconds() <= 9) {
        timeSecond =`0${data.getSeconds()}`
    } else {
        timeSecond = data.getSeconds()
    }

    hours.innerHTML = data.getHours()
    minut.innerHTML = data.getMinutes()
    second.innerHTML = timeSecond
}, 1000)