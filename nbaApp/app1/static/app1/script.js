function get(id){
	return document.getElementById(id);
}

function SearchClass(){
	this.focusText = function(i){
		if(i.value == i.defaultValue){
			i.value = '';
			i.style.color = 'black';
		}
	}
	this.blurText = function(i){
		if(i.value == ''){
			i.value = 'Search Players';
			i.style.color = '#B2CCCC';
		}	
	}
}

function searchInit(){
	searchObj = new SearchClass();
	get('search').addEventListener('blur',function(){searchObj.blurText(this);},false);
	get('search').addEventListener('focus',function(){searchObj.focusText(this);},false);
}

window.onload = searchInit();

function advSearchInit(){
	get('advSearch').firstChild.href = '/player_list/advsearch/';
}

window.onload = advSearchInit();


$(document).ready(function(){
	$('.header').click(function(){
		var playerName = this.getElementsByClassName('button-text')[0].textContent;
		playerName = playerName.substr(1, playerName.length - 2);
		playerName = playerName.replace(/\s/g, '_');
		this.nextSibling.nextSibling.getElementsByClassName('view-more')[0].href = '/player_list/' + playerName;
	});
});

$(document).keypress(function(key) {
    if(key.which == 13) {
		var activeElem = document.activeElement;
		if (activeElem.value == '')
			document.location.href = '/player_list/'
		else
			document.location.href = '/player_list/searchresult=' + activeElem.value;
    }
});

$(document).ready(function(){
		$('#accordion-container').accordion({collapsible:true});
		$('#accordion-container').accordion({active:false});
	}
);

$(document).ready(function(){
	$('.header').mouseenter(function(){
		$(this).animate({
			backgroundColor:'black',
			color:'white',
	
		}, 0)
	$('.header').mouseleave(function(){
		$(this).animate({
				backgroundColor:'white',
				color:'black',
				
			}, 0)
		});
	});
});



