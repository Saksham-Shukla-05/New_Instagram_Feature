let trgt = document.getElementById("storie1")
let cStorie = document.querySelector("#c-storie")
let CloseStory = document.querySelector("#close")
let userimage = document.getElementById("username")
let story = document.querySelectorAll(".storie")
let cStorieImg = document.querySelector("#c-story-img")
let likeStorie = document.querySelector("#liked")
let k = document.getElementById("card")
let liking = 1




// console.log(likeStorie)







likeStorie.addEventListener("click",function(){
    if(liking==1){
        likeStorie.style.color="red"
        liking=0
    }
    else{
        likeStorie.style.color="white"
        liking=1
    }
})



story.forEach(function (val) {

    val.addEventListener("click", function () {
        userimage.childNodes[0].src = val.childNodes[1].src
        cStorieImg.src = val.childNodes[1].src
        val.style.transform = "scale(3)"
        val.style.transition = "transform ease .3s"

        setTimeout(() => {
            cStorie.style.display = "flex"
        }, 100);

        setTimeout(() => {
            cStorie.style.display = "none"
            val.style.transform = "scale(1)"
        }, 3000);


        likeStorie.addEventListener("click",function(){
            if(liking==1){
                likeStorie.style.color="red"
                liking=0
            }
            else{
                likeStorie.style.color="white"
                liking=1
            }
        })


    })

   

    CloseStory.addEventListener("click", () => {
        cStorie.style.display = "none"
        val.style.transform = "scale(1)"
        val.style.transition = "transform ease .2s"
    })
})

