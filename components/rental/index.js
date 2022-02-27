// components/rental/index.js
import { areaList } from "@vant/area-data";
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    areaList,
    fileList: [{}],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopup() {
      this.setData({ show: true });
      console.log(111);
    },

    onClose() {
      this.setData({ show: false });
      console.log(222);
    },
    onChange(event) {
      console.log(event.detail);
    },
  },
});
