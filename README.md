1. 怎么让代码一个个字符出现？
- 在定时器中将字符串用slice取字符依次放入页面pre中
2. 怎么让CSS代码生效
- 同时将CSS放一份进style中，使CSS生效
3. 怎么高亮代码（选择器）
- 法一：用正则匹配，将写入pre的选择器替换成<span style="color:red;">[选择器]</span>
- 法二：用js库给选择器、属性、函数这些需要高亮的部分包住选中
4. 代码出现的时候不会自动往下拉
设置dom.scrollTop = dom.scrollHeight
5. 需要注意：定时器是异步的
```
setTimeout(()=>{},20)
console.log(1)

// 会先执行console
```