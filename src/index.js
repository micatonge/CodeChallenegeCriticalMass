

const song = `Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark!
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark!
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark!
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark!
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark!`;

//splits the song into an array of each song line
var songLines = song.split("\n");
//initializing string to hold the updates lyric lines
var songLyricString = "";
//initializing index variable
var i = 0;
//displays each updated lyric line list
function displayLyricLine(){
  //adds current lyric line to string
  songLyricString += "<li>" + songLines[i] +"</li>";
  //updates the documentElement that displayes the current lyric list
  document.getElementById("lyrics-list").innerHTML = songLyricString;
  //for loop that runs through each line in the array
  if (++i < songLines.length) {
     //delays 1.5sec and recalls the function to display the current list
      setTimeout(displayLyricLine, 1500); //ms
  }
}
