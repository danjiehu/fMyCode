// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if (wx.getStorageSync('stories').length > 0) {this.globalData.stories = wx.getStorageSync('stories')}
    // this.globalData.stories = wx.getStorageSync('stories')
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
   test: "does it appear?",
   stories: []
  }
})
