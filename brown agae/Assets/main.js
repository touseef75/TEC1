let but = document.getElementById("next");
let video = document.getElementById("video");

let start = document.getElementById("start");
let cont= document.getElementById("container");
let div = document.getElementById("div");
let num1 = 0;
start.addEventListener("click",function(){
    if(num1 == 0){
    video.play();
    start.innerText = "Pause";
    num1 = 1;
    

    }else{
         video.pause();
    start.innerText = "Play";

    num1 = 0;
    

    }
})

let arr = [
     {
        video:"./Assets/images/same.mp4",
        cont:"white",
        width:"50%"
    },
      {
        video:"./Assets/images/step2.mp4",
        cont:"white",
        width:"70%"

    },
  
]
let num = 0;
but.addEventListener("click",function(){
    num++;
    if(num == 1){
    video.style.width = arr[num].width;
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    but.innerText = "Back";
    num = -1;
    }else{
    video.style.width = arr[num].width;
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;

    but.innerText = "Next";

    }
    
});