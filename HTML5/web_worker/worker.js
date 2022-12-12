// 监听事件，主线程可以通过 postMessage 发送信息过来
self.onmessage = (messageEvent) => {
    const { type, count } = messageEvent.data;
    switch (type) {
        case 'start':
            // 通过 type 去区分不同的业务逻辑，payload 是传过来的数据
            let  result = 0;
            for (let i = 0; i < count; i++) {
                result += i
            }
            // ....,通过一系列处理之后，把最终的结果发送给主线程
            this.postMessage(result);
            break;
    }
};
