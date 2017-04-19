/**
 * Created by Михаил on 18.04.2017.
 */
app.directive('foo', function() {
    return {
        link: function (scope, element, attrs) {
            console.log('sdsdsd---sdsdsd');
            //templateUrl: "../html/index.html"
        },
        templateUrl: "../html/index.html",
        replace:true
    };


});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JzQuNGF0LDQuNC7IG9uIDE4LjA0LjIwMTcuXHJcbiAqL1xyXG5hcHAuZGlyZWN0aXZlKCdmb28nLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2RzZHNkLS0tc2RzZHNkJyk7XHJcbiAgICAgICAgICAgIC8vdGVtcGxhdGVVcmw6IFwiLi4vaHRtbC9pbmRleC5odG1sXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIi4uL2h0bWwvaW5kZXguaHRtbFwiLFxyXG4gICAgICAgIHJlcGxhY2U6dHJ1ZVxyXG4gICAgfTtcclxuXHJcblxyXG59KTsiXSwiZmlsZSI6ImRpcmVjdGl2ZS5qcyJ9
