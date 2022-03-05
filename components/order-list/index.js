// components/order-list/index.js
Component({
  /**
   * 组件的属性列表
   */

  options: {
    styleIsolation: "shared",
  },

  properties: {
    res: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

    show: false,
  },



  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(event) {
      this.setData({ show: true });
    },
    onClose() {
      this.setData({ show: false });
    },

    view1click: function (event) {
      
      const pid = event.currentTarget.dataset.id
      console.log(pid)
    },

  
  },
});