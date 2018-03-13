//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    //修改tabBar的active值  
    editTabBar: function (tabBar) {
      console.log(tabBar)
      var _curPageArr = getCurrentPages();
      console.log(_curPageArr);
      var _curPage = _curPageArr[_curPageArr.length - 1];//相当于Page({})里面的this对象</span>  
      var _pagePath = _curPage.__route__;
      if (_pagePath.indexOf('/') != 0) {
        _pagePath = '/' + _pagePath;
      }
      _curPage.setData({
        tabBar: tabBar
      });
      console.log('end')
    },  
})