let lost = document.getElementsByClassName("lost")
let message = document.getElementsByClassName("status")
let score = document.getElementById("score")
let start = document.getElementById("start")
let wrong= new Audio("sounds/wrong.mp3")
let haar=new Audio("sounds/lost.mp3")
let show= new Audio("sounds/moleshow.mp3")
let hole = document.getElementsByClassName("hole")
wrong.playbackRate=4
show.playbackRate=2.5
let pappu

check = (data) => {
    if (data.innerHTML != "") {
        score.innerHTML = Number(score.innerHTML) + 100
    }

    else {
        if (lost[0].innerHTML != 'X') {
            lost[0].innerHTML = 'X'
            wrong.play()
        } else if (lost[1].innerHTML != 'X') {
            lost[1].innerHTML = 'X'
            wrong.play()
        } else if(lost[2].innerHTML != 'X'){
            lost[2].innerHTML = 'X'
            haar.play()
            
        }
    } 
    if (lost[0].innerHTML == 'X'&&lost[1].innerHTML == 'X'&&lost[2].innerHTML == 'X') {
        clearInterval(pappu)
        lost[0].innerHTML = ''
        lost[1].innerHTML = ''
        lost[2].innerHTML = ''
           }
}



let game = ()=>{

    for (let i = 0; i < hole.length; i++) {
        hole[i].addEventListener('click', ()=> check (hole[i]))
        
    }

    score.innerHTML = "0"
    pappu = setInterval(() => {
        let x = Math.floor(Math.random() * 9)
        hole[x].innerHTML = "<img src='images/whack.jpg'  width= 90px height=90px >"
        show.play()

        setInterval(() => {
            hole[x].innerHTML = ""
        }, 1500);

    }, 2000);

    }

    start.onclick= ()=>{game()}



