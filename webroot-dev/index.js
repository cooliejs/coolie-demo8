define(function (require, exports, module) {
    // 引入样式文件模块，并自动插入到 style 标签里
    require('./style.css', 'css|style');

    // 在文档里插入该 html 片段
    document.getElementById('demo').innerHTML = require('./template.html');
});