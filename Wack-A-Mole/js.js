let hole = document.getElementsByTagName("li")
let lost = document.getElementsByClassName("lost")
let message = document.getElementsByClassName("status")
let score = document.getElementById("score")
let start = document.getElementById("start")
let wrong= new Audio("sounds/wrong.mp3")
let haar=new Audio("sounds/lost.mp3")
let show= new Audio("sounds/moleshow.mp3")
wrong.playbackRate=4
show.playbackRate=2.5


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
}



let game = ()=>{

    score.innerHTML = "0"
    let pappu = setInterval(() => {
        
        let x = Math.floor(Math.random() * 9)
        hole[x].innerHTML = "<img src='images/whack.jpg'  width= 90px height=90px >"
        show.play()
        setInterval(() => {
            hole[x].innerHTML = ""
        }, 1500);
        if (lost[0].innerHTML == 'X'&&lost[1].innerHTML == 'X'&&lost[2].innerHTML == 'X') {
            clearInterval(pappu)
            lost[0].innerHTML = ''
            lost[1].innerHTML = ''
               lost[2].innerHTML = ''
               }
    }, 2000);
    }

    start.onclick= ()=>{game()}


hole[0].onclick = ()=>{ check(hole[0])}
hole[1].onclick = ()=>{ check(hole[1])}
hole[2].onclick = ()=>{ check(hole[2])}
hole[3].onclick = ()=>{ check(hole[3])}
hole[4].onclick = ()=>{ check(hole[4])}
hole[5].onclick = ()=>{ check(hole[5])}
hole[6].onclick = ()=>{ check(hole[6])}
hole[7].onclick = ()=>{ check(hole[7])}
hole[8].onclick = ()=>{ check(hole[8])}
