const todayHTML = document.querySelector("#today")
const timer = document.querySelector("#timer")
const congrats = document.querySelector("#congrats")
const fireworks = document.querySelectorAll(".firework")

const nextYear = new Date().getFullYear() + 1
const nextTime = new Date(`January 01 ${nextYear} 00:00:00`)

function yearCalc(){
    const thisYear = new Date()
    const difference = nextTime - thisYear
    const days = Math.floor((((difference / 1000) / 60) / 60) / 24)
    const hours = Math.floor(((difference / 1000) / 60) / 60) % 24
    const minutes = Math.floor((difference / 1000) / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60    

    printTimer((days < 10? '0'+days: days), (hours < 10? '0'+hours: hours), (minutes < 10? '0'+minutes: minutes), (seconds < 10? '0'+seconds: seconds))
}

function printTimer(days, hours, minutes, seconds){
    let today = new Date()
    todayHTML.innerText = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    timer.innerText = `${days}:${hours}:${minutes}:${seconds}`

    if(days > 360){
        timer.style.display = "none"
        congrats.style.display = "flex"
        fireworks.forEach((firework) => {
            firework.style.display = "inherit"
        })
        congrats.innerHTML = `Feliz ${today.getFullYear()}<strong>!!</strong>`
    }else{
        timer.style.display = "inherit"
        congrats.style.display = "none"
        fireworks.forEach((firework) => {
            firework.style.display = "none"
        })
    }
}

setInterval(yearCalc, 1000)

yearCalc()