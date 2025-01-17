const inputNumber = document.getElementsByClassName('input').value;
function check(){
    if (inputNumber < 35) {
       alert("Please, enter a number");
    } else {
        alert("Thank you");
    }
}