var x = 50;
  var expression1 = x < 25;
  var expression2 = x > 50;
  console.log(x < 25);
  console.log(x > 50);

  if (expression1 && expression2){
      console.log('T T');
  } 
  else if (expression1) {
      console.log('T F');
  } 
  else if (expression2) {
      console.log('F T');
  }
  else {
      console.log('F F');
  }

 // Switch Statements
   var month = 'Aprial';
   switch(month){
       case 'May':
           console.log('Lucky month is May');
           break;
       case 'Aprial':
           console.log('Lucky month is Aprial');
           break;
       case 'June':
           console.log('Luncky month is June');
       default:
           console.log('Happy New Year');
           break;
   };

   console.log("Pick one of the following colors: red, green, Pink or yellow");
   var color = console.log();

   switch (color){
       case "red":
           console.log("You Picked red");
           break;
        case "green":
            console.log("Youu Picked green");
            break;
        case "Pink":
            console.log("Youu Picked Pink");
            break;
        default:
            console.log("Youu did not Pick from the colors provided.");
            break;
   }

 // This is regular way

  var x = prompt("Choose any number");
  switch(true){
      case x == 45:
          console.log("True✅ True✅");
          break;
      case x < 45:
          console.log("True✅ False❌");
          break;
      case x > 45:
          console.log("False❌ True✅");
          break;
      default:
          console.log("False❌ False❌")
  }

// This is the shorted way://
var mark = prompt ("Enter your mark");
switch (true){
    case mark >= 40:
        console.log("you pass");
        break;
    case mark >= 80:
        console.log("you got A+");
        break;
    default:
        console.log("you fill");
        break;
}