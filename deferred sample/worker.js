self.postMessage('READY');

sleep(4000);

self.postMessage('COMPLETED');

function sleep (ms) {
    var start = new Date().getTime();
    var stop = start + ms;

    while (stop >= new Date().getTime()) {}
}