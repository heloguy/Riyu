/* Add your own script here */

window.first_name = "matthew"
window.last_name = "martin"

var button = document.getElementById("show_email");
button.addEventListener('click', function() {
  button.innerHTML = window.first_name+".i."+window.last_name+"3@gmail.com";
  button.className = "";
  setTimeout(function(){
    button.href = "mailto:"+window.first_name+".i."+window.last_name+"3@gmail.com";
	}, 1);
}, false);