# vuestudy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

一  使用postcss-px-to-viewport 实现自适应 [](https://www.w3cplus.com/mobile/vw-layout-in-vue.html) 
	1 npm install postcss-px-to-viewport --save-dev  
	2 我们在bulid/vue-loader.conf.js
		module.exports = {
		  loaders: utils.cssLoaders({
			sourceMap: sourceMapEnabled,
			extract: isProduction,
		}),
		usePostcss:true
	3 在根目录下postcssrc.js iphone 例子 注意是填写在插件的那个对象里面
		"postcss-px-to-viewport": {
		  viewportWidth: 320,
		  viewportHeight: 568,
		  unitPrecision: 5,
		  viewportUnit: 'vw',
		  selectorBlackList: [],
		  minPixelValue: 1,
		  mediaQuery: false
		},