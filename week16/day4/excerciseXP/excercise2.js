function myMove(){
    const box = document.getElementById("animate")
    let posOfBox = 0;
    const container = document.getElementById("container")
    let lastPos = 350
    const id = setInterval(outerBox,1)

    function outerBox(){
        if(posOfBox>=lastPos){
            clearInterval(id)
        }else{
            posOfBox++
            box.style.left = posOfBox+"px"
        }
    }
}