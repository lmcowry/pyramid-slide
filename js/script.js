

function loadData(){
    $('#pyramid').text("");


    var height = $('#sliderLength').val();
    $('#sliderValueDisplay').text(height);

    var symbol = $('#symbol').val();

    var startingRowSymbolCount = 2;

    for (var x = 0; x < height; x++){
        var symbolCount = x + startingRowSymbolCount;
        var spaceCount = symbolCount - x;
        var eachRow = "";
        for (var spaceMaker = 0; spaceMaker <= height - symbolCount; spaceMaker++){
            eachRow += " ";
        }
        for (var symbolMaker = 0; symbolMaker < symbolCount; symbolMaker++){
            eachRow += symbol;
        }

        $('#pyramid').append('<p>' + eachRow + '</p>');

    }



}

$('#sliderLength').change(function(e){
    e.preventDefault();
    loadData();
});
