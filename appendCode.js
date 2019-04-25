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
  padding: 12px;
  border: 1px solid #aaa;
}

/* 加一点代码高亮 */
/* 加一点阴影 */
`
let timer = setInterval(function () {
  if(codeIndex >= cssCode.length){
    clearInterval(timer);
  }
  codeContainer.textContent = cssCode.slice(0,codeIndex); // 页面显示
  cssContainer.textContent = cssCode.slice(0,codeIndex); // 写入style，作为样式
  codeIndex ++;
},10)