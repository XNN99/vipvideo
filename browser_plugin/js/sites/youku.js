/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

(function () {
    'use strict';

    angular.element(document).ready(function () {

        var url = window.location.host;
        if (url.indexOf("v.youku.com") >= 0 || url.indexOf("movie.youku.com") >= 0) {

            viData.url = window.location.href;

            if($("meta[name='irTitle']").length >0)
            {
                viData.title = $("meta[name='irTitle']").attr("content").trim();
            }
            if(isNull(viData.title) && $("meta[name='irAlbumName']").length >0){

                viData.title = $("meta[name='irAlbumName']").attr("content").trim();
            }
            if($("meta[name='irCategory']").length >0){

                viData.category = $("meta[name='irCategory']").attr("content").trim();
            }
            if(isNull(viData.category) && $("meta[name='keywords']").length >0){
                viData.category = $("meta[name='keywords']").attr("content").trim();
            }
            if($("meta[name='description']").length > 0){

                viData.desc = $("meta[name='description']").attr("content").trim();
            }

            $("div[class='base_info'] >h1").attr("ng-controller", 'InjectHtmlCtrl as ih');
            $("div[class='base_info'] >h1").append('&nbsp;&nbsp;&nbsp;<a id="vipvideoLink" href="#" ng-click="ih.redirectVideoPage()" style="color:red;font-size:large;">{{LinkName}}</a>');
            angular.bootstrap($("div[class='base_info'] >h1"), ['injectModule']);
        }

        if (url.indexOf("v.youku.com") >= 0) {
            insertNavigateBar();
        }

    });
})();