// Set the api variable
var googleAPI = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";

// Make a ajax call to get the json data as response.
$.getJSON(googleAPI, function (response) {

    // In console, you can see the response objects
    console.log("JSON Data: " + response.items);

    // Loop through all the items one-by-one
    for (var i = 0; i < response.items.length; i++) {

        // set the item from the response object
        var item = response.items[i];

        // Set the book title in the div
        document.getElementById("books").innerHTML += "<li class=\"fullbook\" ><a class=\"hastip\" title=\"" + item.volumeInfo.title + "\n"+ item.volumeInfo.authors +"\"><img src=\"" + item.volumeInfo.imageLinks.thumbnail + "\" alt=\"" + item.volumeInfo.title + "\" ></a></li>"; 
      }
});



function search() {
    var args = {
        tags: document.getElementById('search').value,
        tagmode: "any",
        format: "json"
    };
    console.log(args);

    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + document.getElementById('search').value + "",

    function gbooks(data) {
        console.log(data);
        $.each(data.items, function (i, item) {
            $("<img/>").attr("src", item.volumeInfo.imageLinks.thumbnail).appendTo("#books");
            if (i == 8) return false;
        });
    });
}

document.getElementById('button').onclick = search;

 