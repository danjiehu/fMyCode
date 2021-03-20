// pages/story/story.js
Page({

  /**
   * Page initial data
   */
  data: {
    // text: "who's there?",
    // defaultStory: [
    //   { content: "you don't have any content yet", author: "" }
    // ],
    stories: [],
    // activeIndex: 0
  },

  clickOnCard: function(event){
    console.log(event)
    console.log(event.currentTarget.dataset.index)
    const i = event.currentTarget.dataset.index
    this.setData({
      activeIndex: i
    })
  },

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
    // this.setData({
    //   stories: wx.getStorageSync('stories')
    // }) 
    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      success: (res) => {
        console.log(res.data)
        this.setData({
          stories: res.data.reverse()
        })
      }
    })
  },

      // if(getApp().globalData.stories.length !== 0){this.setData({
      //   stories: getApp().globalData.stories.reverse()
      // })} 

    //   this.setData({
    //     stories: getApp().globalData.stories.reverse()
    //   }) 
    // },

    // let stories = wx.getStorageSync("stories").reverse()
    // this.setData({
    //   console.log(stories),
    //   stories: stories
    //   stories: wx.getStorageSync("stories"),
    //   stories: stories.reverse()
    // })


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