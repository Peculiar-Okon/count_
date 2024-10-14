const countEl = document.getElementById("count-el")

count = 0
function incrementCount(){
    count = count + 1
    countEl.innerText = count
}

function reset(){
    countEl.innerText = "0"
}

function save(){
    
}


