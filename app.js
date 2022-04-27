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
                var h3 = document.createElement('h3');
                h3.className = "card-title";
                h3.textContent = current.name;
                span.className = 'result-card';
                span.append(h3);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current.img}`);
                span.append(img);
                var h2 = document.createElement('h2');
                h2.className = "card-level";
                h2.textContent = current.level;
                span.append(h2);
                results.append(span);
            }
        }

    })

}
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
                var h3 = document.createElement('h3');
                h3.className = "card-title";
                h3.textContent = current2.name;
                span.className = 'result-card';
                span.append(h3);
                var img = document.createElement('img');
                img.className = 'card-image';
                img.setAttribute('src', `${current2.img}`);
                span.append(img);
                var h2 = document.createElement('h2');
                h2.className = "card-level";
                h2.textContent = current2.level;
                span.append(h2);
                results.append(span);
            }
        
    })

}
