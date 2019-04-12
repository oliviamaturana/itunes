
function runMe(){

    var artist=document.getElementById("artist").value;
    var resultCount=document.getElementById("resultCount").value;


    $.ajax({
        url: "http://itunes.apple.com/search?term=" + artist + "&limit=" + resultCount,
        dataType: "jsonp",
        success: listResults
    });

}


function processResults(data){
    console.log(data);

    for(var i =0; i< data.results.length; i++) {

        document.getElementById("myDiv").innerHTML += data.results[i].trackName;

    }


}

function listResults(data){
    var songs = data.results;
    var html = "<table border = '1'>";
    for (var i=0; i < songs.length; i++){
        html += "<tr>";
        html += "<td>" + songs[i].artistName + "</td>";
        html += "<td>" + songs[i].collectionName + "</td>";
        html += "<td>" + songs[i].trackName + "</td>";
        html += "<td>" + "Play Song:" + "</td>"
        html += "<td><audio controls='true' src=" + songs[i].previewUrl + " id= audio " + "</td>";
        html += "<td> <img src='" + songs[i].artworkUrl100 + "'</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("myDiv").innerHTML = html;
}

