function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once

// https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-24&sortBy=publishedAt&apiKey=e414cd4bd8394571a02ab95b2502223e
function init() {
  fetchJSONFile('data.json', function(data) {
    console.log(data)
  });
  // fetchJSONFile('data.json', function(data) {
    // document.getElementById("articleImage").src = data.articles[0].urlToImage;
    // document.getElementById("articleSource").innerHTML = data.articles[0].source.name;
    // document.getElementById("articleAuthor").innerHTML = data.articles[0].author;
    // document.getElementById("articleTitle").innerHTML = data.articles[0].title;
    // document.getElementById("articleContent").innerHTML = data.articles[0].content;

    // var articleImage = document.createElement('img');
    // articleImage.src = data.articles[0].urlToImage;
    // articleImage.height = 300;
    // document.getElementById('showStory').appendChild(articleImage);
    //
    // var articleSource = document.createElement('p');
    // articleSource.innerHTML = data.articles[0].source.name;
    // document.getElementById('showStory').appendChild(articleSource);
    //
    // var articleAuthor = document.createElement('p');
    // articleAuthor.innerHTML = data.articles[0].author;
    // document.getElementById('showStory').appendChild(articleAuthor);
    //
    // var articleTitle = document.createElement('p');
    // articleTitle.innerHTML = data.articles[0].title;
    // document.getElementById('showStory').appendChild(articleTitle);
    //
    // var articleContent = document.createElement('p');
    // articleContent.innerHTML = data.articles[0].content;
    // document.getElementById('showStory').appendChild(articleContent);

    // for (var i = 0; i < data.articles.length; i++) {
    //   var articleImage = document.createElement('img');
    //   articleImage.src = data.articles[i].urlToImage;
    //   articleImage.height = 300;
    //   document.getElementById('showStory').appendChild(articleImage);
    //
    //   var articleSource = document.createElement('p');
    //   articleSource.innerHTML = data.articles[i].source.name;
    //   document.getElementById('showStory').appendChild(articleSource);
    //
    //   var articleAuthor = document.createElement('p');
    //   articleAuthor.innerHTML = data.articles[i].author;
    //   document.getElementById('showStory').appendChild(articleAuthor);
    //
    //   var articleTitle = document.createElement('p');
    //   articleTitle.innerHTML = data.articles[i].title;
    //   document.getElementById('showStory').appendChild(articleTitle);
    //
    //   var articleContent = document.createElement('p');
    //   articleContent.innerHTML = data.articles[i].content;
    //   document.getElementById('showStory').appendChild(articleContent);
    // }
  // });
}

window.onload = init;
