//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("top-nav-dim");
        $(".navbar-collapse").addClass("pull-right");
        $(".logo-image").css('display','none');
        $(".logo-text").css('display','inline');
        $(".navbar-brand").css('padding-top','15px');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("top-nav-dim");
        $(".navbar-collapse").removeClass("pull-right");
        $(".logo-text").css('display','none');
        $(".logo-image").css('display','inline');
        $(".navbar-brand").css('padding-top','0px');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.carousel').carousel({
        interval: 5000 //changes the speed of image slider
    });




(function(){

    var app = angular.module('Echelon',['ui.router']);

    app.controller('MainController', mainController);
    app.config(RouteConfig);

    function mainController($scope){

    }

    RouteConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    
    function RouteConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'home.html'
            })
            .state('services',{
                url: '/services',
                templateUrl: 'services.html'
            })
            .state('contact',{
                url: '/contact',
                templateUrl: 'contact.html'
            });
        }

})();