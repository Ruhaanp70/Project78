var family = [
  "father.jpg",
  "mother.jpg",
  "Grandfather.jpg",
  "Grandmother.jpg",
  "Uncle.jpg"
]

var names = [
  "Shreyas",
  "Sangeeta",
  "Kanaya",
  "pyari",
  "Kapil"
]

var i = 1;
function Nextpic() {
  document.getElementById("tamtam").src = family[i];
  document.getElementById("tamfam").innerHTML = names[i];
  i++;
  var arraysize = family.length;
  if (i > (arraysize - 1)) {
    i = 0;
  }
}
