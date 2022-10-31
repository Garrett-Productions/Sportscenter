function hide(element){
    element.remove();
}

function addNumber(element){
    element.innerHTML++;
}

function displayMessage(){
    alert('The Ninjas Have Won!')
}
setTimeout(displayMessage, 13000);