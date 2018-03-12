// pages/kind/kind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        id : '1',
        url: '/pages/index/index',
        name:'服装',
        array: [
          {
            id: '1001',
            url: '/pages/index/index',
            name: '鞋子',
          }, {
            id: '1002',
            url: '/pages/index/index',
            name: '衣服'
          }, {
            id: '1003',
            url: '/pages/index/index',
            name: '裤子'
          }
        ]
      }, {
        id: '2',
        url: '/pages/index/index',
        name: '手机',
        array: [
          {
            id: '2001',
            url: '/pages/index/index',
            name: '三星',
          }, {
            id: '2002',
            url: '/pages/index/index',
            name: '华为'
          }, {
            id: '2003',
            url: '/pages/index/index',
            name: '苹果'
          }
        ]
      }, {
        id: '3',
        url: '/pages/index/index',
        name: '零食',
        array: [
          {
            id: '2001',
            url: '/pages/index/index',
            name: '糖果',
          }, {
            id: '2002',
            url: '/pages/index/index',
            name: '面包'
          }, {
            id: '2003',
            url: '/pages/index/index',
            name: '膨化'
          }
        ]
      }
    ],
    curItem: [
    {
      url: '/pages/index/index',
      name: '鞋子',
    }, {
      url: '/pages/index/index',
      name: '衣服'
    }, {
      url: '/pages/index/index',
      name: '裤子'
    }
    ],
    _index : 1,
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      
    }
  },
  flodMenu: function () {
    this.setData({
      isFold: !this.data.isFold
    });
  },
  menuchange: function (e) {
    this.setData({
      curItem: this.data.array[e.target.id - 1].array,
      _index: e.target.id
      }
    )
  },
  
  
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})