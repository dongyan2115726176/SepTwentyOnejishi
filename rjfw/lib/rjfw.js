function $() {
    $.ajax({
        url: "../json/rjfw.json",
        data: "get",
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
        }
    });
}
$();