module.exports = {
  base: '/gulu-vue/',
  title: 'gulu-vue',
  description: '一个好用的UI框架',
  themeConfig: {
    sidebar: [
      '/',
      { title: '入门', children: ['/install/', '/get_started/'] },
      {
        title: '组件',
        children: [
          '/components/icon.md',
          '/components/button.md',
          '/components/grid.md',
          '/components/input.md',
          '/components/layout.md',
          '/components/popover.md',
          '/components/tabs.md',
          '/components/toast.md',
          '/components/collapse.md',
        ],
      },
    ],
  },
}
