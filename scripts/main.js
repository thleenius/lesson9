// 0. when user clicks 'go'
$('.go-btn').click(function() {
	
	// 1. get info from the text box
	//2. process text - not necessary here
	
	var input = $('.user-input').val();
	
	// 3. output text to the page

	$('.placeholder').html(input);

});

var images = ['IMG_1136', 'IMG_1082', 'IMG_0945'];
var index = 0;
$('.change-image').click(function() {
	index++;
	if (index>2) {
		index = 0;
	}

	$('.meme img').attr('src', 'images/' + images[index] + '.JPG');
	
	// $('.meme img').attr('src', 'file:///Users/kathleensullivan/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/7D306753-19DC-4022-8D1D-F72765491DD8/IMG_1136.JPG');
	
});


// file:///Users/kathleensullivan/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/7D306753-19DC-4022-8D1D-F72765491DD8/IMG_1136.JPG
// file:///Users/kathleensullivan/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/C8957BED-62FB-4D80-A141-3B777A70F48A/IMG_1082.JPG
// file:///Users/kathleensullivan/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/3B078B2D-68A6-4A3F-9489-037920C63C9D/IMG_0945.JPG