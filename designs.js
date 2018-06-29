
//submit button
$("input[type='submit']").on("click",function(event) {

	event.preventDefault();

	const height = $("#inputHeight").val();
	const width = $("#inputWeight").val();

	$("pixelCanvas").empty();
	makeGrid(height,width);
});


// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {

// Your code goes here!

for (let i = 0; i < height; i++){
	$("#pixelCanvas").append($("<tr></tr>"));

	for (let j = 0; j < width; j++){
		$("tr").last().append($("<td></td>"));
	}
}

$("#pixelCanvas").on("mousedown mouseover", "td", function(event) {

	if (event.buttons === 1) {
		if (draw === true) {
			$(this).css("background-color", $("#colorPicker").val());
		} else {
			$(this).css("background-color", "");
		}

	}
});

//toggling between the draw and eraser tools
$("input[name='tool']").on("change", function() {

	if($(this).val() === "draw") {
		draw = true;
	} else if ($(this).val() === "erase") {
		draw = false;
	}

});

}
