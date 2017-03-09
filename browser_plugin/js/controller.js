/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

(function () {
    'use strict';

    /**
     *  create all controls for eViewer.
     * */
    angular
        .module('navModule')
        .controller('NavigateViewCtrl', [
            '$scope', '$timeout','navigateService',
            navigateViewCtrl
        ]);


    function navigateViewCtrl($scope, $timeout,navigateService) {
        var self = this;

        self.hidden = false;
        self.isOpen = false;
        self.hover = false;


        // On opening, add a delayed property which shows tooltips after the speed dial has opened
        // so that they have the proper position; if closing, immediately hide the tooltips
        $scope.$watch('mv.isOpen', function (isOpen) {
            if (isOpen) {
                $timeout(function () {
                    $scope.tooltipVisible = self.isOpen;
                }, 600);
            } else {
                $scope.tooltipVisible = self.isOpen;
            }
        });

        self.items = [
            {name: "播放", icon: chrome.extension.getURL("../images/svg/play.svg"), direction: "bottom"},
            //{name: "下载",icon:chrome.extension.getURL("../images/svg/download.svg"), direction: "bottom"}
        ];

        self.redirectVideoPage = function(){
            navigateService.redirect(viData);
        }


        $scope.mouseenter = function () {
            $scope.nav.isOpen = true;
            $('body').find('#vipnavbar').css('opacity', 1);
        }

        $scope.mouseleave = function () {
            $scope.nav.isOpen = false;
            $('body').find('#vipnavbar').css('opacity', 0.5);

        }
    }

    ///
    angular
        .module('injectModule',['servicemodule'])
        .controller('InjectHtmlCtrl', [
            '$scope',
            'navigateService',
            InjectHtmlCtrl
        ]);

    function InjectHtmlCtrl($scope,navigateService) {
        var self = this;

        console.log('开始获得连接标题');
        $scope.LinkName = "";

        chrome.extension.sendMessage({
            type: "linktitle"
        }, function (response) {
            $scope.LinkName = response;
            console.log('获得连接标题:' + $scope.LinkName);
            $scope.$apply();
        });

        self.redirectVideoPage = function(){
            navigateService.redirect(viData);
        }
    }
})();

