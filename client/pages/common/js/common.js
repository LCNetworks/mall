var redirectToPage = (url) => {
  console.log(url)
  wx.redirectTo({
    url: url,
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}

var switchTabToPage = (url) => {
  wx.switchTab({
    url: url,
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}
module.exports = { redirectToPage, switchTabToPage}