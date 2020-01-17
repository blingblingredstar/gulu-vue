# 快速上手

## 安装

请参考[安装](../install/README.md)章节

## Hello World

```js
import { Button } from 'gulu-vue'
import 'gulu-vue/dist/index.css'
// 需手动引入CSS

import Vue from 'vue'


new Vue({
  el: '#app',
  components: {
    gButton: Button
  }
})
```
