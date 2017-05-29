var $menu_fixed = document.getElementById("header_fixed_menu");

function btn_fun_open() {
	var pos = -250;
	var id = setInterval(frame, 10);
	function frame() {
		for (var i = 0; i < 10; i++) {
			if (pos == 0) {
				clearInterval(id);
			}
			else{
				pos++;
				$menu_fixed.style.left = pos + "px ";
			}
		}	
	}
}

function btn_fun_close() {
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		for (var i = 0; i < 10; i++) {
			if (pos == -250) {
				clearInterval(id);
			}
			else{
				pos--;
				$menu_fixed.style.left = pos + "px ";
			}
		}	
	}
}

$('.tabs_a li').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

// location.reload();


// var $list_tabs = document.getElementsByClassName("tabs_a")[0];

// for (var i = 0; i < $list_tabs.children.length; i++) {
// 	$list_tabs.children[i].onclick = e =>{
// 		reset();
// 		e.target.classList.add("active");
// 	}
// }

// function reset() {
// 	for (var i = 0; i < $list_tabs.children.length; i++) {
// 		$list_tabs.children[i].classList.remove("active");
// 	}
// }