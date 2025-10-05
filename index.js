const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwFieldEl_1 = document.getElementById("passwortfield-one")
let pwFieldEl_2 = document.getElementById("passwortfield-two")

function generatePW() {
    let pw = ""
    for (let i = 0; i < 15; i++) {
        let randomSymbol = drawSymbol()
        pw += randomSymbol
    }
    return pw
    
}

function drawSymbol() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function fillPasswords() {
    let pw1 = generatePW()
    let pw2 = generatePW()
    pwFieldEl_1.value = pw1
    pwFieldEl_2.value = pw2
}

async function copyValue(el) {
    try {
      await navigator.clipboard.writeText(el.value);
    } catch {
      el.select();
      document.execCommand('copy');
      el.blur();
    }
    flash(el)
  }

function flash(el) {
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 600);
}

document.querySelectorAll('.copyable').forEach(el => {
    // optional: suppress focus flash
    el.addEventListener('pointerdown', e => e.preventDefault());
    el.addEventListener('click', () => copyValue(el));
  });






