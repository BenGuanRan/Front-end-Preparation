const worker = new Worker('worker.js')
// 监听worker信息
worker.onmessage = function (messageEvent) {
    console.log(messageEvent);
    alert(11)
}
// 监听Worker错误信息
worker.onmessageerror = function (messageEvent) {
    console.log(messageEvent)
}
// 为worker传递信息
worker.postMessage({ type: 'start', count: 10000000000 }); // 发送信息给worker
// 终止worker
// worker.terminate();