function mathRandom() {
  var qwe = [

 { quoute: "\''\ I solemnly swear that I am up to no good.",
  name: "\''\<br>\--\Mrs:J.KRowling"},
 { quoute: "\''\ Be yourself; everyone else is already taken.",
  name: "\''\<br>\--\   Mr:Oscar Wilde " },
 { quoute: "\''\ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", 
 name: "\''\<br>\--\   Mr:Marilyn Monroe " },
 { quoute: "\''\ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  name: "\''\<br>\--\   Mr:Albert Einstein " },
 { quoute: "\''\ A room without books is like a body without a soul.", 
 name: "\''\<br>\--\   Mr:Marcus Tullius Cicero " },
 { quoute: "\''\ Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  name: "\''\<br>\--\   Mr:Bernard M. Baruch " },
  ]

var member=Math.floor(Math.random() * qwe.length);

  document.getElementById("member").innerHTML = qwe[member].quoute + qwe[member].name;

}

















