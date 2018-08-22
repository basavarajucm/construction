function mycodova(url) {
    alert();
    var url = url;
    var target = '_blank';
    var options = "location = yes"
    console.log(url);
    var ref = cordova.InAppBrowser.open(url, target, options);
    
    ref.addEventListener('loadstart', loadstartCallback);
    ref.addEventListener('loadstop', loadstopCallback);
    ref.addEventListener('loadloaderror', loaderrorCallback);
    ref.addEventListener('exit', exitCallback);

    function loadstartCallback(event) {
        console.log('Loading started: '  + event.url)
    }

    function loadstopCallback(event) {
        console.log('Loading finished: ' + event.url)
    }

    function loaderrorCallback(error) {
        console.log('Loading error: ' + error.message)
    }

    function exitCallback() {
        console.log('Browser is closed...')
    }
}
function useCordovaYoutubePlayer(videoUrl){
    console.log(videoUrl);
    YoutubeVideoPlayer.openVideo(videoUrl, function(result) { console.log('YoutubeVideoPlayer result = ' + result); });
}