// $(tokyo.html).ready(function(){
//     $("tokyostation").hover(function(){
//         $(this).css("background-color", "yellow");
//         }, function(){
//         $(this).css("background-color", "pink");
//     });
// });

var el = document.getElementById("shibuya");


function appearBox() {
  document.getElementById("box").classList.remove("hide");
  console.log("called");
}
el.addEventListener("click", appearBox());
