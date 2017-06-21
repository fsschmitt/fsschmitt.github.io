var $window = $(window);
var $animation_elements = [],
    $counter_elements = [];

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function startCounters($element) {
    var countTo = $element.attr('data-count');
    var isInView = $element.attr('data-inview');
    if (!(isInView == 'true')) {
        $({
            countNum: $element.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $element.text(numberWithCommas(Math.floor(this.countNum)));
            },
            complete: function () {
                $element.text(numberWithCommas(this.countNum));
                $element.attr('data-inview', true);
                //alert('finished');
            }
        });
    }
}

function resetCounters($element) {
    $element.text(0);
    $element.attr('data-inview', false);
}

function animateInView($element) {
    $element.addClass('in-view');
}

function hideInView($element) {
    $element.removeClass('in-view');
}

function check_if_in_view($elements_check, success, failure) {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($elements_check, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            success($element);
        } else {
            failure($element);
        }
    });
}

function check_all_if_in_view() {
    check_if_in_view($animation_elements, animateInView, hideInView);
    check_if_in_view($counter_elements, startCounters, resetCounters);
}

$(function () {
    $animation_elements = $('.animation-element');
    $counter_elements = $('.counter-element');
});

$window.on('scroll resize', check_all_if_in_view);
$window.trigger('scroll');
