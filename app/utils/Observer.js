/**
 * Created by Dennis Wang
 * on 2018/3/25 23:01
 *
 * 观察者模式：又名：发布者-订阅者模式
 *
 */

'use strict';
const eventProxy = {
  onObj: {},
  oneObj: {},

  /**
   * 注册事件
   * @param key
   * @param fn
   */
  on: function (key, fn) {
    if (this.onObj[key] === undefined) {
      this.onObj[key] = [];
    }

    this.onObj[key].push(fn);
  },

  /**
   * 注册一次事件
   * @param key
   * @param fn
   */
  one: function (key, fn) {
    if (this.oneObj[key] === undefined) {
      this.oneObj[key] = [];
    }

    this.oneObj[key].push(fn);
  },

  /**
   * 注销所有注册事件
   * @param key
   */
  off: function (key) {
    this.onObj[key] = [];
    this.oneObj[key] = [];
  },

  /**
   * 触发事件
   * @return {boolean}
   */
  trigger: function () {
    let key, args;
    if (arguments.length == 0) {
      return false;
    }
    key = arguments[0];
    args = [].concat(Array.prototype.slice.call(arguments, 1));

    if (this.onObj[key] !== undefined
      && this.onObj[key].length > 0) {
      for (let i in this.onObj[key]) {
        this.onObj[key][i].apply(null, args);
      }
    }

    if (this.oneObj[key] !== undefined
      && this.oneObj[key].length > 0) {
      for (let i in this.oneObj[key]) {
        this.oneObj[key][i].apply(null, args);
        this.oneObj[key][i] = undefined;
      }
      this.oneObj[key] = [];
    }
  }
};

export default eventProxy;