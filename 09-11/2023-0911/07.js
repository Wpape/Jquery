var count =0;
setInterval(function(){
    count++;
    // 注意: 分线程中不能操作dom 使用 window document alert.....
    // title.innerHTML=`计数:${count}`

    // 分线程不能操作页面 所以要把分线程中的数据发送给主线程,让主线程显示


    // 分线程中的this指向当前分线程对象
    // 用于分线程向主线程发送数据
    this.postMessage(count)

},1000)