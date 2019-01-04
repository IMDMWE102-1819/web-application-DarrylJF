function getURL(){
    var action_src = $('keywords').val();
    var my_form = $('my_form').val();

    var urlLink = "https://api.deezer.com/search?q=";
    urlLink += action_src;

    my_form.action = urlLink
    console.log(urlLink)
}


var xhr = $.get(urlLink);

xhr.done(function(response) {
    console.log("Success got data:", response);

var artists = response.data

for (i in artists){
    $('.inner').append("<h2>'"+artists[i].title+"'</h2>")
}
});

