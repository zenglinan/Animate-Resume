let codeIndex = 0;
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
  background-color: rgb(222,225,230);
}

/* 看起来页面的边距需要宽一点 */
#codeContainer {
  padding: 10px 16px;
  border: 1px solid #aaa;
}

/* 做一些代码高亮 */
.token.selector {
  color: rgb(243, 143, 192);
}
.token.function {
  color: #DD4A68;
}
.token.property {
  color: rgb(66, 186, 96);
}

/* 加一点阴影 */
#codeContainer {
  box-shadow: 0 0 4px 3px rgba(0,0,0,.3);
}

/* 接下来在右边准备一张白纸，开始写简历了 */
#codeContainer,#paper {
  width: 50%;
}
#paper {
  background-color: white;
}
`
let timer = setInterval(function () {
  if(codeIndex >= cssCode.length){
    clearInterval(timer);
  }
  codeContainer.innerHTML = Prism.highlight(cssCode.slice(0,codeIndex), Prism.languages.css, 'CSS'); // 页面显示
  cssContainer.innerHTML = cssCode.slice(0,codeIndex); // 写入style，作为样式
  codeContainer.scrollTop = codeContainer.scrollHeight;
  codeIndex ++;
},10)
