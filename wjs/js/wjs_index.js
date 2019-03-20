$(function () {
    var items = $('.carousel-inner .item')
    $(window).on('resize', function () {
        var width = $(window).width()
        if (width >= 768) {
            $(items).each(function (index) {
                var item = $(this);
                var imgSrc = item.data('lgImg');
                item.html($('<a href = "javascript:;"class="pcImg"></a>').css('backgroundImage', "url('" + imgSrc + "')"))
            });
        } else {
            $(items).each(function (index) {
                var item = $(this);
                var imgSrc = item.data('smImg');
                item.html(' <a href="javascript:;" class="middleImg hidden-sm hidden-md hidden-lg"><img src="' + imgSrc + '" alt="..."></a>')
            })
        }
    }).trigger('resize')
    var startX, endX;
    var carousel_inner = $('.carousel-inner')[0];
    var carousel = $('.carousel')
    carousel_inner.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
        console.log(startX);

    })
    carousel_inner.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            /*上一张*/
            carousel.carousel('prev');
        } else if (endX - startX < 0) {
            /*下一张*/
            carousel.carousel('next');
        }
    })
})