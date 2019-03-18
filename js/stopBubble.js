function stopBubble(e){
    // 如果提供了事件对象，则这是一个非IE浏览器
    if(e && e.stopPropagation){
        // 支持W3C的stopPropagation()方法
        e.stopPropagation()
    }else{
        // 否则 使用IE的方式阻止冒泡
        window.event.cancelBubble = true
    }   
}