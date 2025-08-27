// function to take inner text value 
function innerTextToNumber(id){
    const innerNumber = parseInt(document.getElementById(id).innerText);
    return innerNumber;
}

// heart count section
const hearts = document.getElementsByClassName("heart");
for(const heart of hearts){
    heart.addEventListener("click", function(){
        let availableHeartCount = innerTextToNumber("heart-count");
        const heartCount = document.getElementById("heart-count");
        let count = availableHeartCount + 1 ;
        heartCount.innerText = count;
    })
    
}

// call button function 

