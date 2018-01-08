function loadSkyFeed() {
    $('.skyFeed').html('');
    var displayStr = '';
    var url = 'http://feeds.skynews.com/feeds/rss/technology.xml';
    feednami.load(url, function (result) {
        if (result.error) {
            if (isDebbug) { console.log(result.error) };
        } else {
            var entries = result.feed.entries;
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                displayStr += '<li class="newsItem col-lg-4">';
                displayStr += '<a href= "' + entries[i].guid + '" target= "_blank" >';
                displayStr += '<p class="newsTitle">' + entries[i].title + '</p>';
                displayStr += '<img src="' + entries[i].image.url + '" alt="' + entries[i].title + '"/>';
                displayStr += '<p>' + entries[i].description + '</p>'
                displayStr += '<p class="newsDate">Published on ' + new Date(entries[i].pubDate).toLocaleString() + '</p>'
                displayStr += '</a></li>'
                if (isDebbug) { console.dir(entry) };
                
            }
        }
        $('.skyFeed').html(displayStr);
        $.jStorage.set('news', $('.skyFeed').html());
    });
}