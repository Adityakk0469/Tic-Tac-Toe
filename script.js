let count = 0;
let arr = Array(9).fill(null);

function wrong() {
    alert("Wrong Move");
}

function check() {
    switch (true) {
        case (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != null):
            alert("Player " + arr[0] + " wins");
            resetGame();
            break;
        case (arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null):
            alert("Player " + arr[3] + " wins");
            resetGame();
            break;
        case (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null):
            alert("Player " + arr[6] + " wins");
            resetGame();
            break;
        case (arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != null):
            alert("Player " + arr[0] + " wins");
            resetGame();
            break;
        case (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null):
            alert("Player " + arr[1] + " wins");
            resetGame();
            break;
        case (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null):
            alert("Player " + arr[2] + " wins");
            resetGame();
            break;
        case (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null):
            alert("Player " + arr[0] + " wins");
            resetGame();
            break;
        case (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null):
            alert("Player " + arr[2] + " wins");
            resetGame();
            break;
        case (count == 9):
            alert("Draw");
            resetGame();
            break;
    }
}

function change(id) {
    let box = document.getElementById(id);
    if (box.innerHTML == "") {
        if (count % 2 == 0) {
            box.innerHTML = 'X';
            arr[id] = 'X';
        } else {
            box.innerHTML = 'O';
            arr[id] = 'O';
        }
        box.style.backgroundColor=" rgba(245, 245, 220, 0.8)";
        count++;
        setTimeout(() => {
            
            check();
        }, 100);
    } else {
        wrong();
    }
}

function resetGame() {
    arr.fill(null);
    count = 0;
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
    document.querySelectorAll('.box').forEach(box => box.style.backgroundColor=" rgba(245, 245, 220, 0.57)");
}
