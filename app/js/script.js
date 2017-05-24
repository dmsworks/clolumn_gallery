$(document).ready(function(){
    console.log('script.js');
    function $f_filterItems (filter) {
        var $curFilter = filter;
        var $galleryItems = $('.column-gallery__item');
        $galleryItems.each(function(){
            var el = $(this);
            if(el.attr('data-img-category') == $curFilter || $curFilter == 'c_all') {
                el.removeClass('hidden');
            } else {
                el.addClass('hidden');
            }
        });
    }
    $('.column-gallery__filters-btn').click(function(e) {
        e.preventDefault();
        var el = $(this);
        var $filter = el.attr('data-ftype');
        el.closest('.column-gallery__filters').find('.column-gallery__filters-btn').removeClass('active');
        el.addClass('active');
        $f_filterItems ($filter);
    });
});
