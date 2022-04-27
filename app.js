const searchBtn=document.getElementById('submit')

 searchBtn.addEventListener("click",userinput)
 function userinput()
 {
    const inputText = document.querySelector('input').value;
    console.log(inputText)
    $.get(`https://api.tvmaze.com/search/shows?q=${inputText}`,function(data){
      if (inputText === ""){
        alert("Please input a show name!");
      }
      else {
        var results = document.querySelector('#results');
        results.innerHTML = "";
        for (var i = 0; i<data.length; i++) {
          var current = data[i];
        
          var span = document.createElement('span');
          var h3 = document.createElement('h3');
          h3.className = "card-title";
          h3.textContent = current.show.name;
          span.className = 'result-card';
          span.append(h3);
          var img = document.createElement('img');
          img.className = 'card-image';
          img.setAttribute('src', `${current.show.image.medium}`);
          span.append(img);
          var h2 = document.createElement('h2');
          h2.className = "card-genres";
          h2.textContent = current.show.genres;
          span.append(h2);
          var newDiv = document.createElement('div');
          newDiv.className = 'card-summary';
          span.append(newDiv);
          var em = document.createElement('em');
          newDiv.append(em);
          var p = document.createElement('p');
          p.innerHTML = current.show.summary;
          newDiv.append(p);
          var a = document.createElement('a');
          a.href = current.show.url;
          a.innerText = "View Show";
          newDiv.append(a);
         results.append(span);
        }
      }
     
    })
  
  }
