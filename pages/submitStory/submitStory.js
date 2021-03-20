// pages/submitStory/submitStory.js
const globalData = getApp().globalData

Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit: function (event) { 
    console.log("check event details",event.detail.value)
    let newStory = event.detail.value
    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      method: "POST",
      data: newStory ,
      success: (res) => { 
      console.log(res)
      wx.switchTab({
        url: '/pages/story/story',
      }) }
    })
  },
    
    // globalData.stories.unshift(newStory)
    // globalData.stories.unshift(newStory);
    // wx.setStorage({
    //   data: globalData.stories,
    //   key: 'stories',
    // });
    // when setting storage, use wx.setStorage 
    // when getting storage, use wx.getStorageSync
    // globalData.stories.push(newStory);
    // console.log(globalData.stories);
    // let stories = wx.getStorageSync('stories')
    // if(!stories.length > 0){
    //   stories = [newStory]
    // } else {
    //   stories.push(newStory)
    // }
    // wx.setStorage({
    //   data: stories,
    //   key: "stories"
    // })
    

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})