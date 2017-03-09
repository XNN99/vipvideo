/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

(function () {
    'use strict';

    angular.element(document).ready(function () {

        var url = window.location.host;
        if (url == 'www.mgtv.com') {
            viData.url = window.location.href;
            if($("h1[class='v-panel-title']").length >0){

                viData.title = $("h1[class='v-panel-title']").text().trim();
            }

            //芒果没有描述和目录信息
            if($("meta[name='irCategory']").length>0){

                viData.category = $("meta[name='irCategory']").attr("content").trim();
            }
            if(isNull(viData.category) && $("meta[name='keywords']").length > 0){
                viData.category = $("meta[name='keywords']").attr("content").trim();
            }

            $("h1[class='v-panel-title']").attr("ng-controller", 'InjectHtmlCtrl as ih');
            $("h1[class='v-panel-title']").html($("h1[class='v-panel-title']").text()+'&nbsp;&nbsp;&nbsp;<a id="vipvideoLink" href="#" ng-click="ih.redirectVideoPage()" style="color:red;font-size:large;">{{LinkName}}</a>');
            angular.bootstrap($("h1[class='v-panel-title']"), ['injectModule']);

        }

        if (url == 'www.mgtv.com') {
            insertNavigateBar();
        }
    });
})();