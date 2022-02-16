module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "headcolor": '#BAFFB4',
        "btnColor": '#96DAE4',
        "btnHoverColor": '#6D70C6',
        "btnEditColor": '#CDEEAA',
        "btnEditHoverColor": '#219F94',
        "dangerColor": '#FF9292',
        "dangerHoverColor": '#FF6363',
        "selectColor": '#F3F4ED',
        "selectHoverColor": '#536162'
      }
    },
  },
  plugins: [],
}
