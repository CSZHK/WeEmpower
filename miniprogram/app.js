//app.js
import EventEmitter from './utils/event' // 事件总线
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    this.globalData = {}
  }
})

/**
 * 用户完整信息，只能通过getter和setter访问和修改
 */
var USER_INFO = {
  id: null, // 用户id
  phone: '', // 手机号
  openid: '', // openid
  status: 0, // 账号状态：0~3 未审核、已通过、未通过、已拉黑
  review_msg: '', //  管理员驳回资质审核材料时给的简短说明
  nickname: '', // 昵称
  avatar: '', // 头像链接
  name: '', // 真实姓名
  birthday: '', // 出生日期
  id_number: '', // 身份证号码
  id_card_img: { // 身份证图片链接
    front: '', // 身份证正面
    back: '' // 身份证反面
  },
  address: '', // 地址
  postcode: '', // 邮编
  deposit_status: 0, // 押金状态：0~2 未支付、已支付、已退还
}

