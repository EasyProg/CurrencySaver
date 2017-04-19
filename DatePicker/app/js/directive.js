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