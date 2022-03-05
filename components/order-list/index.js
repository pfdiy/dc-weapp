// components/order-list/index.js
Component({
  /**
   * 组件的属性列表
   */

  options: {
    styleIsolation: "shared",
    multipleSlots: true,
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
    getAddress(event) {
      this.setData({ show: true });
      console.log(event);
      const pid = event.currentTarget.dataset.id;
      console.log(pid);
    },
  },
  
});
