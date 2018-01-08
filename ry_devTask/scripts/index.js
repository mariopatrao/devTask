var isDebbug = true;
var globalSearch = "";
$(document).ready(function () {
    if ($('.skyFeed').length > 0) {
        loadSkyFeed();
        function RefreshFeed() {
            setTimeout(function () {
                loadSkyFeed();
                RefreshFeed();
            }, 1800000);
        }
        RefreshFeed();
    }
    if ($('.searchList').length > 0) {
        $('.searchList').html();
    }
});

function doSearch() {
    Cookies.set('query', '' + $('#query').val() + '', { expires: 1 });   
}