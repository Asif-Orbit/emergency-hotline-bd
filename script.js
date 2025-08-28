// function to take inner text value 
function innerTextToNumber(id){
    const innerNumber = parseInt(document.getElementById(id).innerText);
    return innerNumber;
}
// function to count copy text
function copyText(){
        const copyCount = innerTextToNumber("copy-count");
        let copy = document.getElementById("copy-count")
        const sum = copyCount + 1;
        copy.innerText = sum;
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
let history = [];

// call button function 

// calling function for national emergency number 
document.getElementById("call-btn-1").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling National Emergency Number 999" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"National Emergency Number",
            number: "999",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })

// calling function for police help line
document.getElementById("call-btn-2").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Police Helpline Number 999" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Police Helpline Number",
            number: "999",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Fire Service Number
document.getElementById("call-btn-3").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Fire Service Number 999" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Fire Service Number",
            number: "999",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Ambulance Service
document.getElementById("call-btn-4").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Ambulance Service 1994-999999" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Ambulance Service",
            number: "1994-999999",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Women & Child Helpline
document.getElementById("call-btn-5").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Women & Child Helpline 109" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Women & Child Helpline",
            number: "109",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Anti-Corruption Helpline
document.getElementById("call-btn-6").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Anti-Corruption Helpline 106" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Anti-Corruption Helpline",
            number: "106",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Electricity Helpline
document.getElementById("call-btn-7").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Electricity Helpline 16216" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Electricity Helpline",
            number: "16216",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Brac Helpline
document.getElementById("call-btn-8").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Brac Helpline 16445" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Brac Helpline",
            number: "16445",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[350px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111]">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
// calling function for Bangladesh Railway Helpline
document.getElementById("call-btn-9").addEventListener("click", function(){
        const coin = innerTextToNumber("available-coin")
        let coins = document.getElementById("available-coin")
        if(coin < 20){
            alert("You don't have enough coins. needed at least 20 coins.");
            return;
        }
        alert("Calling Bangladesh Railway Helpline 163" );
        const latestCoin = coin - 20;
        coins.innerText = latestCoin;
        
        const historyData = {
            name:"Bangladesh Railway Helpline",
            number: "163",
            date: new Date().toLocaleTimeString()
        }
        history.push(historyData);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center w-[300px] bg-[#FAFAFA] p-[16px] rounded-lg mt-[16px] shadow-lg">
                            <div>
                                <h1 class="font-semibold text-sm">${historyData.name}</h1>
                                <p class="text-[#5C5C5C] text-[18px]">${historyData.number}</p>
                            </div>
                            <p class="text-[#111111] text-sm">${historyData.date}</p>
                        </div>
        `
      document.getElementById("calling-history").appendChild(div)

    })
    
    // function for clear button 
    document.getElementById("clear-btn").addEventListener("click", function(){
        const callingHistory = document.getElementById("calling-history")
        callingHistory.innerText="";
    })

    // copy button function for national emergency number 
    document.getElementById("copy-btn-1").addEventListener("click", function(){
        alert("copying National Emergency Number 999");
        navigator.clipboard.writeText("999");
        copyText();
    })
    // copy button function for Police Helpline number 
    document.getElementById("copy-btn-2").addEventListener("click", function(){
        alert("copying Police Helpline Number 999");
        navigator.clipboard.writeText("999");
        copyText();
    })
    // copy button function for Fire Service number 
    document.getElementById("copy-btn-3").addEventListener("click", function(){
        alert("copying Fire Service Number 999");
        navigator.clipboard.writeText("999");
        copyText();
    })
    // copy button function for Ambulance Service number 
    document.getElementById("copy-btn-4").addEventListener("click", function(){
        alert("copying Ambulance Service number 1994-999999");
        navigator.clipboard.writeText("1994-999999");
        copyText();
    })
    // copy button function for Women & Child Helpline number 
    document.getElementById("copy-btn-5").addEventListener("click", function(){
        alert("copying Women & Child Helpline number 109");
        navigator.clipboard.writeText("109");
        copyText();
    })
    // copy button function for Anti-Corruption Helpline number 
    document.getElementById("copy-btn-6").addEventListener("click", function(){
        alert("copying Anti-Corruption Helpline number 106");
        navigator.clipboard.writeText("106");
        copyText();
    })
     // copy button function for Electricity Helpline number 
    document.getElementById("copy-btn-7").addEventListener("click", function(){
        alert("copying Electricity Helpline Number 16216");
        navigator.clipboard.writeText("16216");
        copyText();
    })
    // copy button function for Brac Helpline number 
    document.getElementById("copy-btn-8").addEventListener("click", function(){
        alert("copying Brac Helpline Number 16445");
        navigator.clipboard.writeText("16445");
        copyText();
    })
    // copy button function for Bangladesh Railway Helpline number 
    document.getElementById("copy-btn-9").addEventListener("click", function(){
        alert("copying Bangladesh Railway Helpline Number 163");
        navigator.clipboard.writeText("163");
        copyText();
    })
   

