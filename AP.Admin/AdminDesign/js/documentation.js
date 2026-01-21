// Filled Text
$(document).ready(function() {
	$('.progress .filled').progressbar({
			display_text: 'fill'
	});
	$('#trigger-80').click(function() {
		$pb.attr('data-transitiongoal', 80).progressbar({
			display_text: 'center'
		});
	});

	var clipboard = new Clipboard('code');
		var clipboard = new Clipboard('textarea');
		$('.code').click(function () {
			$(this).attr('title', 'Copied').tooltip('fixTitle').tooltip('show'); 
		})
});

// Range Silder JS
 var changeValBtn = document.querySelector('#js-example-change-value button');
    changeValBtn.addEventListener('click', function (e) {
    var inputRange = changeValBtn.parentNode.querySelector('input[type="range"]'),
    value = changeValBtn.parentNode.querySelector('input[type="number"]').value;
    inputRange.value = value;
    inputRange.dispatchEvent(new Event('change'));
    }, false);