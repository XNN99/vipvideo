/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

'use strict';


var viData = {
    "url" : '',
    "title": "",
    "category" : "",
    "desc" : ''
};

function isNull(data){
    if(data == "" || data == undefined || data == null)
        return true;
    return false;
}


/*
 * 向页面插入导航条
 */
function insertNavigateBar() {
    var injectNavBarHtml = '' +
        '<div id="vipnavbar" style="position:absolute;z-index: 999999;top: 25%;opacity: 0.4;" ng-app="app" ng-controller="NavigateViewCtrl as nav" ng-cloak>' +
        '   <md-fab-speed-dial ng-hide="nav.hidden" md-direction="right" md-open="nav.isOpen" class="md-scale md-fab-top-left" ng-class="{ \'md-hover-full\': nav.hover }" ng-mouseenter="mouseenter()" ng-mouseleave="mouseleave()"> ' +
        '       <md-fab-trigger> ' +
        '         <md-button aria-label="menu" class="md-fab md-warn" ng-click="nav.redirectVideoPage()"> ' +
        '             播放 ' +
        '         </md-button> ' +
        '       </md-fab-trigger> ' +
        '   </md-fab-speed-dial>' +
        '</div>';

    $('body').append(injectNavBarHtml);
    angular.bootstrap($("#vipnavbar"), ['navModule']);
}

angular.module('servicemodule', [
    'ngResource'
]);

angular
    .module('navModule', ['ngMaterial', 'ngResource','servicemodule'])
    .config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('orange');

    });

angular
    .module('injectModule', ['ngMaterial', 'ngResource','servicemodule'])
    .config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('orange');

    });



angular
    .module('app', ['ngMaterial', 'ngResource', 'injectModule', 'navModule']);

