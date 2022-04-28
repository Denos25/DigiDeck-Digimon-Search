//Search by name
const searchBtn = document.getElementById('submit')
searchBtn.addEventListener("click", userinput)
function userinput() {
    const inputText = document.querySelector('input').value;
    $.get(`https://digimon-api.vercel.app/api/digimon/name/${inputText}`, function (data) {
        if (inputText === "") {
            alert("Please input a Digimon name!");
        }
        else {
            console.log(data);
            var results = document.querySelector('#results');
            results.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var current = data[i];

                var span = document.createElement('span');
                span.className = 'result-card';
                var h2 = document.createElement('h2');
                h2.className = "card-title";
                h2.textContent = current.name;
                span.append(h2);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current.img}`);
                span.append(img);
                var h4 = document.createElement('h4');
                h4.className = "card-level";
                h4.textContent = `Stage: ${current.level}`;
                span.append(h4);
                results.append(span);
            }
        }

    })

}
//Search by Level
const searchlvlBtn = document.getElementById('levelSubmit')
searchlvlBtn.addEventListener("click", userlvlinput)

function userlvlinput() {
    const inputLevel = document.getElementById("levelSelect").value;
    $.get(`https://digimon-api.vercel.app/api/digimon/level/${inputLevel}`, function (data2) {
   
            console.log(data2);
            var results = document.querySelector('#results');
            results.innerHTML = "";
            for (var i = 0; i < data2.length; i++) {
                var current2 = data2[i];

                var span = document.createElement('span');
                span.className = 'result-card';
                var h2 = document.createElement('h2');
                h2.className = "card-title";
                h2.textContent = current2.name;
                span.append(h2);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current2.img}`);
                span.append(img);
                var h4 = document.createElement('h4');
                h4.className = "card-level";
                h4.textContent = `Stage: ${current2.level}`;
                span.append(h4);
                results.append(span);
            }
        
    })

}

//Search TCG Cards
const searchTCGBtn = document.getElementById('TCGSubmit')
searchTCGBtn.addEventListener("click", userTCGinput)
function userTCGinput() {
    const inputTCG = document.body.getElementsByTagName('input')[2].value;
    const inputType = document.getElementById("typeSelect").value;
    $.get(`https://digimoncard.io/api-public/search.php?n=${inputTCG}&series=Digimon Card Game&type=${inputType}`, function (data3) {
        if (inputTCG === "") {
            alert("Please input a card name!");
        }
        else {
            console.log(data3);
            var results = document.querySelector('#results');
            results.innerHTML = "";
            for (var i = 0; i < data3.length; i++) {
                var current = data3[i];

                var span = document.createElement('span');
                span.className = 'result-card';
                var h2 = document.createElement('h2');
                h2.className = "card-title";
                h2.textContent = current.name;
                span.append(h2);
                var cardNumber = document.createElement('h5');
                cardNumber.className = "card-number";
                cardNumber.textContent = `Card Number: ${current.cardnumber}`;
                span.append(cardNumber);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current.image_url}`);
                span.append(img);
                if (current.stage !== null) {
                    var h4 = document.createElement('h3');
                    h4.className = "card-level";
                    h4.textContent = `Stage: ${current.stage}`;
                    span.append(h4);
                }
                var cardColor = document.createElement('h4');
                cardColor.className = "card-color";
                if ((current.color === "Black") || (current.color === "Purple") || (current.color === "Blue") || (current.color === "Red") || (current.color === "Green")) {
                    cardColor.style.color = "White";
                }
                cardColor.style.backgroundColor = `${current.color}`
                cardColor.textContent = `Color: ${current.color}`;
                span.append(cardColor);
                results.append(span);
                var cardEffect = document.createElement('h5');
                cardEffect.className = "card-effect";
                if (current.maineffect !== null) {
                    cardEffect.innerHTML = `Main Effect: ${current.maineffect}`;
                    span.append(cardEffect);
                }
                
                results.append(span);
            }
        }
    })
    

}
//site logo 
var img = document.createElement("img");
img.src = "images/logo.png";
img.width = "500";
img.height = "300";
var src = document.getElementById("header");
src.appendChild(img);

//Footer align center
var footer = document.getElementById("footer");
footer.style.textAlign = "center";