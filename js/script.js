$(function (){

	$(".navbar-toggler").blur(function(){
		var screenwidth = window.innerWidth;
		if(innerWidth < 768){
			$("#collapsible-nav").collapse('hide');
		}
	})

});


function auto (url,locator){
	var xht = new XMLHttpRequest();	

		xht.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				locate(this.responseText , locator);
				
			}
		};
		xht.open("GET", url ,true);
		xht.send();
};

function locate (res , loct){
	document.getElementById(loct).innerHTML = res;
};

function menu (){
	auto("snippets/menu.html" , 'main-content');
};
function single (){
	auto("snippets/single.html" , 'main-content');
};
function home (){
	auto("snippets/home.html" , 'main-content');
};

// ('#menu-tile').addEventListener("click" , menu());
// ("#specials-tile").addEventListener("click" , special());