
let cssCode =
  `
/* Hello，这是我制作的一个会动的简历
*
*  在写简历之前，我需要加一些CSS样式
*
*  让我们的页面好看一点 */


/* 添加一点过渡效果 */
* {
  transition: all 1s;
}

/* 再加个背景色 */
html {
  background-color: rgb(0,43,54);
}

/* 做一些代码高亮 */
body {
  color: rgb(215,215,215);
}
.token.selector {
  color: rgb(243, 143, 192);
}
.token.function {
  color: #DD4A68;
}
.token.property {
  color: rgb(66, 186, 96);
}

/* 看起来页面的边距需要宽一点 */
#codeContainer {
  padding: 10px 16px;
  border: 1px solid #aaa;
}

/* 加一点阴影 */
#codeContainer {
  box-shadow: 0 0 4px 3px rgba(0,0,0,.3);
}

/* 接下来在右边准备一张白纸 */
#codeContainer {
  width: 40%;
}
#paper {
  width: 52%;
  background-color: white;
}

/* 调整一下位置 */
#codeContainer {
  left: 1%;
  top: 2%;
}
#paper {
  right: 1%;
  top: 2%;
} 

/* 把代码区旋转一下 */
html{
  perspective: 1000px;
}
#codeContainer {
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(20deg) translateZ(-80px) translateX(20px);
          transform: rotateY(20deg) translateZ(-80px) translateX(20px);
}
`
let mdCode =
  `
# 自我介绍
  我叫曾宝浩，毕业于广东工业大学，从大一开始自学前端，希望面试前端开发岗位。

# 掌握技能
- 熟悉HTML & CSS & JavaScript
- 熟悉HTTP知识
- 熟练使用Vue
- 掌握Scss Webpack Parcel
- 熟悉Node.js

# 项目介绍
1. Canvas画板
2. 动态简历
3. 原生JS 华为音乐手机端
4. Todo List待办事项
5. Node.js在线备忘录
6. Vue重构移动端有赞商城
7. React.js IM即时通讯系统
8. Vue自制 UI 框架
9. 小程序番茄闹钟
10. Vue.js 构建的CNODE社区

# 联系方式
- 手机 15521017704
- 邮箱 1392767180@qq.com
- QQ 1392767180
`
function writeCss(code, callback) {
  let codeIndex = 0;
  let timer = setInterval(function () {
    codeContainer.innerHTML = Prism.highlight(cssCode.slice(0, codeIndex), Prism.languages.css, 'CSS'); // 页面显示
    cssContainer.innerHTML = cssCode.slice(0, codeIndex); // 写入style，作为样式
    codeContainer.scrollTop = codeContainer.scrollHeight;
    codeIndex++;
    if (codeIndex >= code.length) {
      clearInterval(timer);
      codeIndex = 0;
      callback && callback();
    }
  }, 0)
}
function writeMarkdown(code) {
  let codeIndex = 0;
  let timer2 = setInterval(function () {
    paper.innerHTML = marked(code.slice(0, codeIndex));
    paper.scrollTop = codeContainer.scrollHeight;
    codeIndex++;
    if (codeIndex >= code.length) {
      window.clearInterval(timer2);
      codeIndex = 0;
    }
  }, 20)
}
writeCss(cssCode, () => {
  writeMarkdown(mdCode);
})

