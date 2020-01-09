# gulu-vue - 基于Vue二次封装的ui框架

[![Build Status](https://travis-ci.com/blingblingredstar/gulu-vue.svg?branch=master)](https://travis-ci.com/blingblingredstar/gulu-vue)
![GitHub package.json version](https://img.shields.io/github/package-json/v/blingblingredstar/gulu-vue)
![GitHub](https://img.shields.io/github/license/blingblingredstar/gulu-vue)

## 介绍

学习Vue过程中封装的一个UI框架。

## 开始使用

1. 添加CSS样式

   + 使用本框架需将CSS样式box-sizing属性设置为border-box

   ```css
   * {
     box-sizing: border-box;
   }
   *::before {
     box-sizing: border-box;
   }
   *::after {
     box-sizing: border-box;
   }
   ```

   > **IE8及以上浏览器**支持此样式

2. 安装gulu-vue

  ```sh
  npm install --save gulu-vue
  ```

3. 引入gulu-vue

  ```js
  import { Button, ButtonGroup ,Icon } from 'gulu-vue'
  import 'gulu-vue/dist/index.css'

  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup,
      'g-icon': Icon
    }
  }
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
