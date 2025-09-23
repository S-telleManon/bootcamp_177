const form = document.getElementById("libform")
const storyPhrase = document.getElementById("story")
const shuffleBtn = document.getElementById("shuffle")

let wordOfUser = {}


const fullStory = [
"{person} took a {adjective} {noun} to {place} and decided to {verb}."
]
function generateStory(words) {
  const randomIndex = Math.floor(Math.random() * fullStory.length);
  return fullStory[randomIndex]
    .replace("{noun}", words.noun)
    .replace("{adjective}", words.adjective)
    .replace("{person}", words.person)
    .replace("{verb}", words.verb)
    .replace("{place}", words.place);
}
let newWords = null;

 form.addEventListener("submit", function(event) {
        event.preventDefault();

        const noun = document.getElementById("noun").value.trim();
        const adjective = document.getElementById("adjective").value.trim();
        const person = document.getElementById("person").value.trim();
        const verb = document.getElementById("verb").value.trim();
        const place = document.getElementById("place").value.trim();

currentWords = { noun, adjective, person, verb, place };
generateStory()
shuffleBtn.style.display = "inline-block";
      });

      
      function generateStory() {
        if (!currentWords) return;
        const randomIndex = Math.floor(Math.random() * fullStory.length);
        storyPhrase.textContent = fullStory[randomIndex](currentWords);
      }