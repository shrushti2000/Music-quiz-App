var readLineSync=require('readline-sync');
var userName=readLineSync.question("Hey!What's your name? ");
console.log("Welcome "+ userName );
console.log("Are you a music lover? If yes,see if you can answer these amazing  questions related to music!")
console.log("__________________________________")
var score=0;
function play(question ,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("Your answer is correct");
    score=score+1;
  }else{
    console.log("Your answer is wrong");
  }
}

var questions=[
  {
    question:"Q1. Future Nostalgia' containing the single 'Don't Start Now' is the second studio album from which English singer?",
    answer:"Dua Lipa"
  },
  {
    question:"Q2. Best known for the song 'Stay With Me', which English singer released 'To Die For' in 2020?",
    answer:"Sam Smith"
  },
  {
    question:"Q3. Which former The Smiths front man released 'I Am Not a Dog on a Chain' in 2020?",
    answer:"Morrissey"
  },
  {
    question:"Q4. Which former One Direction member released 'Watermelon Sugar' and 'Adore You'?",
    answer:"Harry Styles"
  },
  {
    question:"Q5. BTS, also known as the Bangtan Boys are a seven-member boy band from which country?",
    answer:"South Korea"
  },
   {
    question:"Q6. Abel Makkonen Tesfaye is the stage name of which act who released 'Blinding Lights' in 2020?",
    answer:"The Weeknd"
  },
   {
    question:"Q7. Australian Toni Watson is best known as which artist who broke through with 'Dance Monkey'",
    answer:"Tones & I"
  },
   {
    question:"Q8. Stormzy collaborated with Burna Boy and which other British musican on 'Own It'?",
    answer:"Ed Sheeran"
  },
   {
    question:"Q9. With which Cuban singer did Shawn Mendes team up with on the track 'Señorita'?",
    answer:"Camila Cabello"
  },
   {
    question:"Q 10.Rare' is the third album from which American star?",
    answer:"Selena Gomez"
  }
]

for(var i=0;i<questions.length;i++){
  var q=questions[i];
  play(q.question,q.answer);
}
console.log("Your score is "+score);