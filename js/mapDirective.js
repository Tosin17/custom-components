(function () {


    angular.module('customDirectives', []).directive('mapGeoLocation', function () {

        var map = null;

        return {

            restrict: 'E',
            scope: {
                width: '@',
                height: '@'
            },

            link: function (scope, elem, attr) {

                // DOM manipulation seems to work only in the link function

                map = angular.element(document.getElementById('map'));

                map.css('background','lightgray');
                map.css('width', scope.width+'px');
                map.css('height', scope.height+'px');
                // console.log(map.html());

            },
            template: '<div id="map">YEAH!</div>'
        }


    })

})()