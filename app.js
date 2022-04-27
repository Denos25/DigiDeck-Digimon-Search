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
                var h2 = document.createElement('h2');
                h2.className = "card-title";
                h2.textContent = current.name;
                span.className = 'result-card';
                span.append(h2);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current.img}`);
                span.append(img);
                var h4 = document.createElement('h4');
                h4.className = "card-level";
                h4.textContent = `Level: ${current.level}`;
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
                var h2 = document.createElement('h2');
                h2.className = "card-title";
                h2.textContent = current2.name;
                span.className = 'result-card';
                span.append(h2);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current2.img}`);
                span.append(img);
                var h4 = document.createElement('h4');
                h4.className = "card-level";
                h4.textContent = `Level: ${current2.level}`;
                span.append(h4);
                results.append(span);
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