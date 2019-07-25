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
  var data = JSON.parse('data.json');
  // fetchJSONFile('data.json', function(data) {
  //     // do something with your data
  //     document.getElementById("showData").innerHTML = data.articles[1].author;
  //
  //   // EXTRACT VALUE FOR HTML HEADER.
  //   // ('Book ID', 'Book Name', 'Category' and 'Price')
  //   var col = [];
  //   for (var i = 0; i < data.articles.length; i++) {
  //       for (var key in data.articles[i]) {
  //           if (col.indexOf(key) === -1) {
  //               col.push(key);
  //           }
  //       }
  //   }
  //
  //   // CREATE DYNAMIC TABLE.
  //   var table = document.createElement("table");
  //
  //   // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
  //
  //   var tr = table.insertRow(-1);                   // TABLE ROW.
  //
  //   for (var i = 0; i < col.length; i++) {
  //       var th = document.createElement("th");      // TABLE HEADER.
  //       th.innerHTML = col[i];
  //       tr.appendChild(th);
  //   }
  //
  //   // ADD JSON DATA TO THE TABLE AS ROWS.
  //   for (var i = 0; i < data.articles.length; i++) {
  //
  //       tr = table.insertRow(-1);
  //
  //       for (var j = 0; j < col.length; j++) {
  //           var tabCell = tr.insertCell(-1);
  //           tabCell.innerHTML = data.articles[i][col[j]];
  //       }
  //   }
  //
  //   // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  //   var divContainer = document.getElementById("showData");
  //   divContainer.innerHTML = "";
  //   divContainer.appendChild(table);
  // //
  // });

}

window.onload = init;
