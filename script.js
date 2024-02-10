var count = 0;
function myFunction() {
  count++;
  if (count == 1) {
    document.getElementById("NO").innerHTML = "did you misclick it pookie?";
  }
  if (count == 2) {
    document.getElementById("NO").innerHTML = "are you sure pookie?";
  }
  if (count == 3) {
    document.getElementById("NO").innerHTML = "oi bhai hero bhako?";
  }
  if (count >= 4) {
    document.getElementById("NO").innerHTML = "imma touch you lil bro";
  }
  if (count >4) {
    alert("you aint got no option lil bro");
  }
}


function yes(){
  document.getElementById("mainone").innerHTML= 'I LOVEEE YOU SO MUCHHH MERO MINUUU ♡ ';
  document.getElementById("yuch").innerHTML =' <img src="/Images/kiss.gif" width="500px" alt="" srcset=""> <br>';
  document.getElementById("tex").innerHTML =' ';
  document.getElementById("YES").innerHTML =' ';
  document.getElementById("NO").innerHTML =' ';
  
}