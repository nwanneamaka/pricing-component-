let myCheckbox = document.querySelector(".switch input"),
    duration = document.querySelector(".month"),
    price = document.querySelector(".price .pricefix"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".myrange");
    

switcher.onclick = function(){
    if(myCheckbox.checked == true){
        
        let priceInt = parseInt(price.textContent);
        duration.textContent = `/yearly`;

    }else{

        refreshPrices();
        duration.textContent = `/monthly`;
    }
}

let pageViews = document.querySelector(".page-views span");
range.addEventListener('input', refreshPrices);

function refreshPrices(){
    
    if(range.value == 1){

        if(myCheckbox.checked == true){
            price.textContent = 8;
        }else{
            price.textContent = 8;
        }
        pageViews.textContent = "10k";
    } 

    if(range.value == 2){
        if(myCheckbox.checked == true){
            price.textContent = 10;
        }else{
            price.textContent = 10;
        }
        pageViews.textContent = "30k";
    }
    if(range.value == 3){

        if(myCheckbox.checked == true){
            price.textContent = 12;
        }else{
            price.textContent = 12;
        }
        pageViews.textContent = "50k";
    } 
if(range.value == 4){

        if(myCheckbox.checked == true){
            price.textContent = 14;
        }else{
            price.textContent = 14;
        }
        pageViews.textContent = "70k";
    } 

    if(range.value == 5){
        if(myCheckbox.checked == true){
            price.textContent = 16;
        }else{
            price.textContent = 16;
        }
        pageViews.textContent = "100k";
    }
}
