let count = 0;
let value = 0;
function wrong(){
    alert("Wrong Move");
}
function change(id){
    let box = document.getElementById(id);
    if(box.innerHTML == ""){
        if(count % 2 == 0){
            box.innerHTML = 'x';
            value = 1;
        }
        else{
            box.innerHTML = 'o';
            value = 2;
        }
        count++;
    }
    else{
        wrong();
    }
}




