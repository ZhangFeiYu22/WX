"use strict";var exports=module.exports={};
var _promise = require('../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URI = 'http://mobi.111.com.cn/ApiControl';
var URI2 = 'http://mobi.fangkuaiyi.com/ApiControl';
var URI3 = 'http://mobi.fangkuaiyi.com/ApiControl?method=cart.shoppingcart&sign=ae0fd9b8b9942c0b1c53863ee476d3e9&timestamp=20161202230515&os=iphone&venderId=2011102716210000&signMethod=md5&format=json&type=mobile&channelName=App%20Store&cityName=%25E5%258C%2597%25E4%25BA%25AC%25E5%25B8%2582&countyName=%25E5%25A4%25A7%25E5%2585%25B4%25E5%258C%25BA&encryptversion=2&flag=4&idfa=C82036FF-F841-4E84-940F-E672A131F2C4&ids=971744%2C50092422%2C10959408&isAllProduct=true&province=2&provinceName=%25E5%258C%2597%25E4%25BA%25AC%25E5%25B8%2582&shopcartdata=%5B%7B%22id%22%3A971744%2C%22saletype%22%3A0%2C%22venderid%22%3A%22%22%2C%22moneyback%22%3A%220.0%22%2C%22adddate%22%3A%22%22%2C%22itemtype%22%3A1%2C%22promotionid%22%3A%22%22%2C%22weight%22%3A%22%22%2C%22productno%22%3A%22%22%2C%22originalprice%22%3A%22%22%2C%22itemid%22%3A971744%2C%22bigcatalogid%22%3A%22%22%2C%22materialtype%22%3A%22ZSP%22%2C%22status%22%3A0%2C%22productcount%22%3A1%7D%2C%7B%22id%22%3A50092422%2C%22saletype%22%3A0%2C%22venderid%22%3A%22%22%2C%22moneyback%22%3A%220.0%22%2C%22adddate%22%3A%22%22%2C%22itemtype%22%3A1%2C%22promotionid%22%3A%22%22%2C%22weight%22%3A%22%22%2C%22productno%22%3A%22%22%2C%22originalprice%22%3A%22%22%2C%22itemid%22%3A50092422%2C%22bigcatalogid%22%3A%22%22%2C%22materialtype%22%3A%22ZSP%22%2C%22status%22%3A0%2C%22productcount%22%3A1%7D%2C%7B%22id%22%3A10959408%2C%22saletype%22%3A0%2C%22venderid%22%3A%22%22%2C%22moneyback%22%3A%220.0%22%2C%22adddate%22%3A%22%22%2C%22itemtype%22%3A1%2C%22promotionid%22%3A%22%22%2C%22weight%22%3A%22%22%2C%22productno%22%3A%22%22%2C%22originalprice%22%3A%22%22%2C%22itemid%22%3A10959408%2C%22bigcatalogid%22%3A%22%22%2C%22materialtype%22%3A%22ZSP%22%2C%22status%22%3A0%2C%22productcount%22%3A1%7D%5D&token=&versionCode=502&versionName=4.9.7';

var params = {
  sign: '85149ecd39057ea933d4c3d1b0266535',
  timestamp: '20161125221959',
  os: 'iphone',
  venderId: '2011102716210000',
  method: 'get.homepage.layer.model',
  signMethod: 'md5',
  format: 'json',
  type: 'mobile',
  platId: '2',
  area: '0',
  province: '1',
  versionName: '4.9.1',
  idfa: '59F893F4-557B-4E44-AB8F-122519FBDB22',
  channelName: 'App%20Store',
  homepageversion: '4',
  encryptversion: '2',
  versionCode: '495'
};

var params2 = {
  method: 'products.category.getcategory.news',
  sign: '71088fa09625c1452e547e586dfb92b0',
  timestamp: '20161202225803',
  os: 'iphone',
  venderId: '2011102716210000',
  signMethod: 'md5',
  format: 'json',
  type: 'mobile',
  area: 0,
  categorytype: 1,
  categoryversion: 2,
  channelName: 'App%20Store',
  encryptversion: 2,
  fatherid: -1,
  idfa: 'C82036FF-F841-4E84-940F-E672A131F2C4',
  searchtype: 1,
  versionCode: 502,
  versionName: '4.9.7'
};

var params3 = {

  method: 'products.category.getsecondcategory.news',
  sign: '71088fa09625c1452e547e586dfb92b0',
  timestamp: '20161202225803',
  os: 'iphone',
  venderId: '2011102716210000',
  signMethod: 'md5',
  format: 'json',
  type: 'mobile',
  area: 0,
  categorytype: 2,
  categoryversion: 2,
  channelName: 'App%20Store',
  encryptversion: 2,
  fatherid: '1000845',
  idfa: 'C82036FF-F841-4E84-940F-E672A131F2C4',
  searchtype: 2,
  versionCode: 502,
  versionName: '4.9.7'
};

function fetchHomeData() {
  return new _promise2.default(function (resolve, reject) {
    wx.request({
      url: URI,
      data: params,
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    });
  });
}

function fetchFirstCategory() {
  return new _promise2.default(function (resolve, reject) {
    wx.request({
      url: URI,
      data: params2,
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    });
  });
}

function fetchSecondCategory() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000000;

  var param = params3;
  param.fatherid = id;
  return new _promise2.default(function (resolve, reject) {
    wx.request({
      url: URI,
      data: param,
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    });
  });
}

function fetchCartData() {
  return new _promise2.default(function (resolve, reject) {
    wx.request({
      url: URI3,
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    });
  });
}

module.exports = { fetchHomeData: fetchHomeData, fetchFirstCategory: fetchFirstCategory, fetchSecondCategory: fetchSecondCategory, fetchCartData: fetchCartData };
//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiVVJJIiwiVVJJMiIsIlVSSTMiLCJwYXJhbXMiLCJzaWduIiwidGltZXN0YW1wIiwib3MiLCJ2ZW5kZXJJZCIsIm1ldGhvZCIsInNpZ25NZXRob2QiLCJmb3JtYXQiLCJ0eXBlIiwicGxhdElkIiwiYXJlYSIsInByb3ZpbmNlIiwidmVyc2lvbk5hbWUiLCJpZGZhIiwiY2hhbm5lbE5hbWUiLCJob21lcGFnZXZlcnNpb24iLCJlbmNyeXB0dmVyc2lvbiIsInZlcnNpb25Db2RlIiwicGFyYW1zMiIsImNhdGVnb3J5dHlwZSIsImNhdGVnb3J5dmVyc2lvbiIsImZhdGhlcmlkIiwic2VhcmNodHlwZSIsInBhcmFtczMiLCJmZXRjaEhvbWVEYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJoZWFkZXIiLCJzdWNjZXNzIiwiZmFpbCIsImZldGNoRmlyc3RDYXRlZ29yeSIsImZldGNoU2Vjb25kQ2F0ZWdvcnkiLCJpZCIsInBhcmFtIiwiZmV0Y2hDYXJ0RGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxtQ0FBWjtBQUNBLElBQU1DLE9BQU8sdUNBQWI7QUFDQSxJQUFNQyxPQUFPLG91REFBYjs7QUFFQSxJQUFNQyxTQUFTO0FBQ2JDLFFBQU0sa0NBRE87QUFFYkMsYUFBVyxnQkFGRTtBQUdiQyxNQUFJLFFBSFM7QUFJYkMsWUFBVSxrQkFKRztBQUtiQyxVQUFRLDBCQUxLO0FBTWJDLGNBQVksS0FOQztBQU9iQyxVQUFRLE1BUEs7QUFRYkMsUUFBTSxRQVJPO0FBU2JDLFVBQVEsR0FUSztBQVViQyxRQUFNLEdBVk87QUFXYkMsWUFBVSxHQVhHO0FBWWJDLGVBQWEsT0FaQTtBQWFiQyxRQUFNLHNDQWJPO0FBY2JDLGVBQWEsYUFkQTtBQWViQyxtQkFBaUIsR0FmSjtBQWdCYkMsa0JBQWdCLEdBaEJIO0FBaUJiQyxlQUFhO0FBakJBLENBQWY7O0FBb0JBLElBQU1DLFVBQVU7QUFDZGIsVUFBUSxvQ0FETTtBQUVkSixRQUFNLGtDQUZRO0FBR2RDLGFBQVcsZ0JBSEc7QUFJZEMsTUFBSSxRQUpVO0FBS2RDLFlBQVUsa0JBTEk7QUFNZEUsY0FBWSxLQU5FO0FBT2RDLFVBQVEsTUFQTTtBQVFkQyxRQUFNLFFBUlE7QUFTZEUsUUFBTSxDQVRRO0FBVWRTLGdCQUFjLENBVkE7QUFXZEMsbUJBQWlCLENBWEg7QUFZZE4sZUFBYSxhQVpDO0FBYWRFLGtCQUFnQixDQWJGO0FBY2RLLFlBQVUsQ0FBQyxDQWRHO0FBZWRSLFFBQU0sc0NBZlE7QUFnQmRTLGNBQVksQ0FoQkU7QUFpQmRMLGVBQWEsR0FqQkM7QUFrQmRMLGVBQWE7QUFsQkMsQ0FBaEI7O0FBcUJBLElBQU1XLFVBQVU7O0FBRWRsQixVQUFRLDBDQUZNO0FBR2RKLFFBQU0sa0NBSFE7QUFJZEMsYUFBVyxnQkFKRztBQUtkQyxNQUFJLFFBTFU7QUFNZEMsWUFBVSxrQkFOSTtBQU9kRSxjQUFZLEtBUEU7QUFRZEMsVUFBUSxNQVJNO0FBU2RDLFFBQU0sUUFUUTtBQVVkRSxRQUFNLENBVlE7QUFXZFMsZ0JBQWMsQ0FYQTtBQVlkQyxtQkFBaUIsQ0FaSDtBQWFkTixlQUFhLGFBYkM7QUFjZEUsa0JBQWdCLENBZEY7QUFlZEssWUFBVSxTQWZJO0FBZ0JkUixRQUFNLHNDQWhCUTtBQWlCZFMsY0FBWSxDQWpCRTtBQWtCZEwsZUFBYSxHQWxCQztBQW1CZEwsZUFBYTtBQW5CQyxDQUFoQjs7QUFzQkEsU0FBU1ksYUFBVCxHQUF5QjtBQUN2QixTQUFPLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsT0FBR0MsT0FBSCxDQUFXO0FBQ1RDLFdBQUtoQyxHQURJO0FBRVRpQyxZQUFNOUIsTUFGRztBQUdUK0IsY0FBUSxFQUFFLGdCQUFnQixrQkFBbEIsRUFIQztBQUlUQyxlQUFTUCxPQUpBO0FBS1RRLFlBQU1QO0FBTEcsS0FBWDtBQU9ELEdBUk0sQ0FBUDtBQVNEOztBQUVELFNBQVNRLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sc0JBQVksVUFBQ1QsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxPQUFHQyxPQUFILENBQVc7QUFDVEMsV0FBS2hDLEdBREk7QUFFVGlDLFlBQU1aLE9BRkc7QUFHVGEsY0FBUSxFQUFFLGdCQUFnQixrQkFBbEIsRUFIQztBQUlUQyxlQUFTUCxPQUpBO0FBS1RRLFlBQU1QO0FBTEcsS0FBWDtBQU9ELEdBUk0sQ0FBUDtBQVNEOztBQUVELFNBQVNTLG1CQUFULEdBQTJDO0FBQUEsTUFBZEMsRUFBYyx1RUFBVCxPQUFTOztBQUN6QyxNQUFJQyxRQUFRZCxPQUFaO0FBQ0FjLFFBQU1oQixRQUFOLEdBQWlCZSxFQUFqQjtBQUNBLFNBQU8sc0JBQVksVUFBQ1gsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxPQUFHQyxPQUFILENBQVc7QUFDVEMsV0FBS2hDLEdBREk7QUFFVGlDLFlBQU1PLEtBRkc7QUFHVE4sY0FBUSxFQUFFLGdCQUFnQixrQkFBbEIsRUFIQztBQUlUQyxlQUFTUCxPQUpBO0FBS1RRLFlBQU1QO0FBTEcsS0FBWDtBQU9ELEdBUk0sQ0FBUDtBQVNEOztBQUVELFNBQVNZLGFBQVQsR0FBeUI7QUFDdkIsU0FBTyxzQkFBWSxVQUFDYixPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLE9BQUdDLE9BQUgsQ0FBVztBQUNUQyxXQUFLOUIsSUFESTtBQUVUZ0MsY0FBUSxFQUFFLGdCQUFnQixrQkFBbEIsRUFGQztBQUdUQyxlQUFTUCxPQUhBO0FBSVRRLFlBQU1QO0FBSkcsS0FBWDtBQU1ELEdBUE0sQ0FBUDtBQVFEOztBQUdEYSxPQUFPQyxPQUFQLEdBQWlCLEVBQUVoQiw0QkFBRixFQUFpQlUsc0NBQWpCLEVBQXFDQyx3Q0FBckMsRUFBMERHLDRCQUExRCxFQUFqQiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IFVSSSA9ICdodHRwOi8vbW9iaS4xMTEuY29tLmNuL0FwaUNvbnRyb2wnO1xuY29uc3QgVVJJMiA9ICdodHRwOi8vbW9iaS5mYW5na3VhaXlpLmNvbS9BcGlDb250cm9sJztcbmNvbnN0IFVSSTMgPSAnaHR0cDovL21vYmkuZmFuZ2t1YWl5aS5jb20vQXBpQ29udHJvbD9tZXRob2Q9Y2FydC5zaG9wcGluZ2NhcnQmc2lnbj1hZTBmZDliOGI5OTQyYzBiMWM1Mzg2M2VlNDc2ZDNlOSZ0aW1lc3RhbXA9MjAxNjEyMDIyMzA1MTUmb3M9aXBob25lJnZlbmRlcklkPTIwMTExMDI3MTYyMTAwMDAmc2lnbk1ldGhvZD1tZDUmZm9ybWF0PWpzb24mdHlwZT1tb2JpbGUmY2hhbm5lbE5hbWU9QXBwJTIwU3RvcmUmY2l0eU5hbWU9JTI1RTUlMjU4QyUyNTk3JTI1RTQlMjVCQSUyNUFDJTI1RTUlMjVCOCUyNTgyJmNvdW50eU5hbWU9JTI1RTUlMjVBNCUyNUE3JTI1RTUlMjU4NSUyNUI0JTI1RTUlMjU4QyUyNUJBJmVuY3J5cHR2ZXJzaW9uPTImZmxhZz00JmlkZmE9QzgyMDM2RkYtRjg0MS00RTg0LTk0MEYtRTY3MkExMzFGMkM0Jmlkcz05NzE3NDQlMkM1MDA5MjQyMiUyQzEwOTU5NDA4JmlzQWxsUHJvZHVjdD10cnVlJnByb3ZpbmNlPTImcHJvdmluY2VOYW1lPSUyNUU1JTI1OEMlMjU5NyUyNUU0JTI1QkElMjVBQyUyNUU1JTI1QjglMjU4MiZzaG9wY2FydGRhdGE9JTVCJTdCJTIyaWQlMjIlM0E5NzE3NDQlMkMlMjJzYWxldHlwZSUyMiUzQTAlMkMlMjJ2ZW5kZXJpZCUyMiUzQSUyMiUyMiUyQyUyMm1vbmV5YmFjayUyMiUzQSUyMjAuMCUyMiUyQyUyMmFkZGRhdGUlMjIlM0ElMjIlMjIlMkMlMjJpdGVtdHlwZSUyMiUzQTElMkMlMjJwcm9tb3Rpb25pZCUyMiUzQSUyMiUyMiUyQyUyMndlaWdodCUyMiUzQSUyMiUyMiUyQyUyMnByb2R1Y3RubyUyMiUzQSUyMiUyMiUyQyUyMm9yaWdpbmFscHJpY2UlMjIlM0ElMjIlMjIlMkMlMjJpdGVtaWQlMjIlM0E5NzE3NDQlMkMlMjJiaWdjYXRhbG9naWQlMjIlM0ElMjIlMjIlMkMlMjJtYXRlcmlhbHR5cGUlMjIlM0ElMjJaU1AlMjIlMkMlMjJzdGF0dXMlMjIlM0EwJTJDJTIycHJvZHVjdGNvdW50JTIyJTNBMSU3RCUyQyU3QiUyMmlkJTIyJTNBNTAwOTI0MjIlMkMlMjJzYWxldHlwZSUyMiUzQTAlMkMlMjJ2ZW5kZXJpZCUyMiUzQSUyMiUyMiUyQyUyMm1vbmV5YmFjayUyMiUzQSUyMjAuMCUyMiUyQyUyMmFkZGRhdGUlMjIlM0ElMjIlMjIlMkMlMjJpdGVtdHlwZSUyMiUzQTElMkMlMjJwcm9tb3Rpb25pZCUyMiUzQSUyMiUyMiUyQyUyMndlaWdodCUyMiUzQSUyMiUyMiUyQyUyMnByb2R1Y3RubyUyMiUzQSUyMiUyMiUyQyUyMm9yaWdpbmFscHJpY2UlMjIlM0ElMjIlMjIlMkMlMjJpdGVtaWQlMjIlM0E1MDA5MjQyMiUyQyUyMmJpZ2NhdGFsb2dpZCUyMiUzQSUyMiUyMiUyQyUyMm1hdGVyaWFsdHlwZSUyMiUzQSUyMlpTUCUyMiUyQyUyMnN0YXR1cyUyMiUzQTAlMkMlMjJwcm9kdWN0Y291bnQlMjIlM0ExJTdEJTJDJTdCJTIyaWQlMjIlM0ExMDk1OTQwOCUyQyUyMnNhbGV0eXBlJTIyJTNBMCUyQyUyMnZlbmRlcmlkJTIyJTNBJTIyJTIyJTJDJTIybW9uZXliYWNrJTIyJTNBJTIyMC4wJTIyJTJDJTIyYWRkZGF0ZSUyMiUzQSUyMiUyMiUyQyUyMml0ZW10eXBlJTIyJTNBMSUyQyUyMnByb21vdGlvbmlkJTIyJTNBJTIyJTIyJTJDJTIyd2VpZ2h0JTIyJTNBJTIyJTIyJTJDJTIycHJvZHVjdG5vJTIyJTNBJTIyJTIyJTJDJTIyb3JpZ2luYWxwcmljZSUyMiUzQSUyMiUyMiUyQyUyMml0ZW1pZCUyMiUzQTEwOTU5NDA4JTJDJTIyYmlnY2F0YWxvZ2lkJTIyJTNBJTIyJTIyJTJDJTIybWF0ZXJpYWx0eXBlJTIyJTNBJTIyWlNQJTIyJTJDJTIyc3RhdHVzJTIyJTNBMCUyQyUyMnByb2R1Y3Rjb3VudCUyMiUzQTElN0QlNUQmdG9rZW49JnZlcnNpb25Db2RlPTUwMiZ2ZXJzaW9uTmFtZT00LjkuNyc7XG5cbmNvbnN0IHBhcmFtcyA9IHtcbiAgc2lnbjogJzg1MTQ5ZWNkMzkwNTdlYTkzM2Q0YzNkMWIwMjY2NTM1JyxcbiAgdGltZXN0YW1wOiAnMjAxNjExMjUyMjE5NTknLFxuICBvczogJ2lwaG9uZScsXG4gIHZlbmRlcklkOiAnMjAxMTEwMjcxNjIxMDAwMCcsXG4gIG1ldGhvZDogJ2dldC5ob21lcGFnZS5sYXllci5tb2RlbCcsXG4gIHNpZ25NZXRob2Q6ICdtZDUnLFxuICBmb3JtYXQ6ICdqc29uJyxcbiAgdHlwZTogJ21vYmlsZScsXG4gIHBsYXRJZDogJzInLFxuICBhcmVhOiAnMCcsXG4gIHByb3ZpbmNlOiAnMScsXG4gIHZlcnNpb25OYW1lOiAnNC45LjEnLFxuICBpZGZhOiAnNTlGODkzRjQtNTU3Qi00RTQ0LUFCOEYtMTIyNTE5RkJEQjIyJyxcbiAgY2hhbm5lbE5hbWU6ICdBcHAlMjBTdG9yZScsXG4gIGhvbWVwYWdldmVyc2lvbjogJzQnLFxuICBlbmNyeXB0dmVyc2lvbjogJzInLFxuICB2ZXJzaW9uQ29kZTogJzQ5NSdcbn07XG5cbmNvbnN0IHBhcmFtczIgPSB7XG4gIG1ldGhvZDogJ3Byb2R1Y3RzLmNhdGVnb3J5LmdldGNhdGVnb3J5Lm5ld3MnLFxuICBzaWduOiAnNzEwODhmYTA5NjI1YzE0NTJlNTQ3ZTU4NmRmYjkyYjAnLFxuICB0aW1lc3RhbXA6ICcyMDE2MTIwMjIyNTgwMycsXG4gIG9zOiAnaXBob25lJyxcbiAgdmVuZGVySWQ6ICcyMDExMTAyNzE2MjEwMDAwJyxcbiAgc2lnbk1ldGhvZDogJ21kNScsXG4gIGZvcm1hdDogJ2pzb24nLFxuICB0eXBlOiAnbW9iaWxlJyxcbiAgYXJlYTogMCxcbiAgY2F0ZWdvcnl0eXBlOiAxLFxuICBjYXRlZ29yeXZlcnNpb246IDIsXG4gIGNoYW5uZWxOYW1lOiAnQXBwJTIwU3RvcmUnLFxuICBlbmNyeXB0dmVyc2lvbjogMixcbiAgZmF0aGVyaWQ6IC0xLFxuICBpZGZhOiAnQzgyMDM2RkYtRjg0MS00RTg0LTk0MEYtRTY3MkExMzFGMkM0JyxcbiAgc2VhcmNodHlwZTogMSxcbiAgdmVyc2lvbkNvZGU6IDUwMixcbiAgdmVyc2lvbk5hbWU6ICc0LjkuNydcbn07XG5cbmNvbnN0IHBhcmFtczMgPSB7XG5cbiAgbWV0aG9kOiAncHJvZHVjdHMuY2F0ZWdvcnkuZ2V0c2Vjb25kY2F0ZWdvcnkubmV3cycsXG4gIHNpZ246ICc3MTA4OGZhMDk2MjVjMTQ1MmU1NDdlNTg2ZGZiOTJiMCcsXG4gIHRpbWVzdGFtcDogJzIwMTYxMjAyMjI1ODAzJyxcbiAgb3M6ICdpcGhvbmUnLFxuICB2ZW5kZXJJZDogJzIwMTExMDI3MTYyMTAwMDAnLFxuICBzaWduTWV0aG9kOiAnbWQ1JyxcbiAgZm9ybWF0OiAnanNvbicsXG4gIHR5cGU6ICdtb2JpbGUnLFxuICBhcmVhOiAwLFxuICBjYXRlZ29yeXR5cGU6IDIsXG4gIGNhdGVnb3J5dmVyc2lvbjogMixcbiAgY2hhbm5lbE5hbWU6ICdBcHAlMjBTdG9yZScsXG4gIGVuY3J5cHR2ZXJzaW9uOiAyLFxuICBmYXRoZXJpZDogJzEwMDA4NDUnLFxuICBpZGZhOiAnQzgyMDM2RkYtRjg0MS00RTg0LTk0MEYtRTY3MkExMzFGMkM0JyxcbiAgc2VhcmNodHlwZTogMixcbiAgdmVyc2lvbkNvZGU6IDUwMixcbiAgdmVyc2lvbk5hbWU6ICc0LjkuNydcbn07XG5cbmZ1bmN0aW9uIGZldGNoSG9tZURhdGEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IFVSSSxcbiAgICAgIGRhdGE6IHBhcmFtcyxcbiAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgZmFpbDogcmVqZWN0XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaEZpcnN0Q2F0ZWdvcnkoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IFVSSSxcbiAgICAgIGRhdGE6IHBhcmFtczIsXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgIGZhaWw6IHJlamVjdFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hTZWNvbmRDYXRlZ29yeShpZCA9IDEwMDAwMDApIHtcbiAgbGV0IHBhcmFtID0gcGFyYW1zMztcbiAgcGFyYW0uZmF0aGVyaWQgPSBpZDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogVVJJLFxuICAgICAgZGF0YTogcGFyYW0sXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgIGZhaWw6IHJlamVjdFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hDYXJ0RGF0YSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogVVJJMyxcbiAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgZmFpbDogcmVqZWN0XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0geyBmZXRjaEhvbWVEYXRhLCBmZXRjaEZpcnN0Q2F0ZWdvcnksIGZldGNoU2Vjb25kQ2F0ZWdvcnksIGZldGNoQ2FydERhdGEgfTtcbiJdfQ==