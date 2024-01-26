//手风琴效果图
$('#box>ul>li').on({
    mouseover: function () {
        // 当前的li的所有的兄弟元素，并修改其宽度
        $(this).siblings('li').css('width', '50px');
        // 将当前li的宽度设置为图片的宽度
        $(this).css('width', '1100px');
    },
    mouseout: function () {
        // 显示所有li的部分图片内容
        $('#box>ul>li').css('width', '240px');
    }
});