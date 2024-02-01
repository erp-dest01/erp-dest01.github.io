$(function () {
    // 获取所有的 <a> 元素
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        // 添加点击事件处理程序
        links[i].addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为
            var targetUrl = this.getAttribute('href'); // 获取目标URL
            window.location.replace(targetUrl); // 在当前页面替换内容并跳转到新页面
        });
    }
})
