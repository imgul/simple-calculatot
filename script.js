let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;

        if (btnText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (btnText == 'X') {
            btnText = '*';
            screenValue += btnText;
            screen.value = screenValue;
        }
        else if (btnText == '=') {
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else if (btnText == 'Del') {
            screenValue = screenValue.split("");
            screenValue.pop();
            screenValue = screenValue.toString();
            screenValue = screenValue.replaceAll(",", "");
            screen.value = screenValue;
        }
        else {
            screenValue += btnText;
            screen.value = screenValue;
        }
    })
}