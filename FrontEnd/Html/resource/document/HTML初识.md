@[TOC](<center>HTML初识</center>)


## HTML是什么？

htyper text markup language  即**超文本标记语言**。

**超文本**：就是指页面内可以包含**图片**、**链接**，甚至**音乐**、**程序**等**非文字**元素。

**标记语言**：标记（标签）构成的语言.

**网页** == HTML文档，由浏览器解析，用来展示的

**静态网页**：静态的资源，如xxx.html

**动态网页**：html代码是由某种开发语言根据用户请求动态生成的

**html文档树形结构图：**

![html文档树形结构图](..\resource\document\data\html文档树形结构图.png)
## 什么是标签
- 是由一对**尖括号**包裹的单词构成 例如：``` <html>``` 所有标签中的单词不可能以数字开头。
- 标签不区分**大小写**。```<html>``` 和``` <HTML>```。 推荐使用**小写**。
- 标签分为两部分: **开始标签**```<a>``` 和**结束标签**```</a>```. 两个标签之间的部分 我们叫做**标签体**.
- 有些标签功能比较简单。使用一个标签即可。这种标签叫做**自闭和标签**。例如: ```<br/> <hr/> <input /> <img />```
- 标签可以**嵌套**。但是不能**交叉嵌套**。```<a><b></a></b>```

## 标签的属性

- 通常是以**键值对**形式出现的。 例如 ```name="alex"```。
- 属性只能出现在**开始标签**或**自闭和标签**中。
- 属性名字全部**小写**。**属性值**必须使用**双引号**或**单引号**包裹 例如 name="alex"
- 如果属性值和属性名完全一样。直接写属性名即可。例如 readonly

## &lt;!DOCTYPE html标签

- 标准模式

### head标签

<p id="paragraph1_01" style="color:mediumpurple;font-size:18px">
    <b>&lt;meta&gt;</b>
</p>

meta标签的组成：meta标签共有两个属性，它们分别是**http-equiv属性**和**name 属性**，不同的属性又有不同的参数值，这些不同的参数值就实现了不同的网页功能。

1. name属性主要用于描述网页，与之对应的属性值为content，content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。   

   ```html
   <meta name="keywords" content="html基础，html总结">
   <meta name="description" content="这是一个初学者对html的总结。">
   ```

2. http-equiv顾名思义，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。

   ```html
   <meta http-equiv="Refresh" content="2;URL=https://www.baidu.com"> //(注意后面的引号，分别在秒数的前面和网址的后面)
    
   <meta http-equiv="content-Type" charset=UTF8">
    
   <meta http-equiv = "X-UA-Compatible" content = "IE=EmulateIE7" /> 
   ```

<p id="paragraph1_02" style="color:mediumpurple;font-size:18px">
    <b>非meta标签</b>
</p>

```html
<title>loriyuhv</title>
<link herf="www.loriyuhv.tech">
<link rel="stylesheet" href="css.css">
<script src="echarts.min.js"></script>
```

### body标签

<p id="paragraph2_01" style="color:mediumpurple;font-size:18px">
    <b>一 基本标签（块级标签和内联标签）</b>
</p>
```tex
<hn>：n的取值范围是1~6；从大到小，用来表示标题

<p>: 段落标签. 包裹的内容被换行.并且也上下内容之间有一行空白.
    
<b> <strong>: 加粗标签.

<strike>: 为文字加上一条中线.

<em>: 文字变成斜体.

<sup>和<sub>: 上角标 和 下角表.

<br>:换行.

<hr>:水平线

<div><span>
```

**coding**


```html
<body>
<!--标题-->
<h1>我爱我的家乡</h1>

<!--段落标签-->
<p>
    我的家乡坐落在江西宜春奉新南边的一座小镇。
    小镇往南十余里，就是我的老家南堡了。有山
    有水有人家。
</p>

<!--加粗-->
<b>我爱我的国家——中国。</b>

<!--斜体-->
<em>我想成为一名工程师。</em>

<!--下角标-->
x<sub>2</sub>
<!--上角标-->
y<sup>2</sup>

<!--换行-->
<br>
<p>你一定可以的。</p>

<!--水平线-->
<hr>
</body>
```

**块级标签：**```<p> <h1> <table> <ol> <ul> <form> <div>```

**内联标签：**```<a> <input> <img> <sub> <sup> <textarea> <span>```

<p style="color:purple"><b>block（块）元素的特点</b></p>

-  总是在**新行**上开始；
- 宽度**缺省**是它的容器的100%，除非设定一个宽度。
-  它可以容纳**内联元素**和其他**块元素**

<p style="color:purple"><b>inline元素的特点</b></p>

- 和其他元素都在一行上；
- 宽度就是它的文字或图片的宽度，不可改变
- 内联元素只能容纳文本或者其他内联元素

<p style="color:purple"><b>特殊字符</b></p>

- ```&lt; &gt；&quot；&copy;&reg;```

<p id="paragraph2_02" style="color:mediumpurple;font-size:18px">
    <b>二 图形标签 &lt;img&gt;</b>
</p>

```tex
src: 要显示图片的路径.

alt: 图片没有加载成功时的提示.

title: 鼠标悬浮时的提示信息.

width: 图片的宽

height:图片的高 (宽高两个属性只用一个会自动等比缩放.)
```

**coding**


```html
<body>
<img src="resource/document/data/html文档树形结构图.png"
     alt="html文档树形结构图"
     title="html文档树形结构图"
     width="800px"
>
</body>
```

<p id="paragraph2_03" style="color:mediumpurple;font-size:18px">
    <b>三 超链接标签(锚标签)&lt;a&gt;</b>
</p>

```tex
href:要连接的资源路径 格式如下: href="http://www.baidu.com" 

target:
	_blank：新窗口打开。
	_parent：在父窗口中打开链接。
	_self：默认，当前页面跳转。
	_top：在当前窗体打开链接，并替换当前的整个窗体(框架页)。
	框架名称: 在指定框架中打开连接内容.
name: 定义一个页面的书签. html5不可用
用于跳转 href : #id.（锚）
```

**coding**


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>03超链接标签</title>
    <style>
        #div1{
            height:600px;
            background-color: mediumpurple
        }
        #div2{
            height:600px;
            background-color: mediumaquamarine
        }
        #div3{
            height:600px;
            background-color: aqua
        }
    </style>
</head>
<body>
<a href="#div3">第三章</a>
<div id="div1">第一章</div>
<div id="div2">第二章</div>
<div id="div3">第三章</div>

</body>
</html>
```

<p id="paragraph2_04" style="color:mediumpurple;font-size:18px">
    <b>四 列表标签</b>
</p>

```tex
<ul>: 无序列表
    <li>: 列表中的每一项
<ol>: 有序列表
    <li>:列表中的每一项.
<dl>：定义列表
	<dt> 列表标题
	<dd> 列表项
```

**coding**


```html
<body>

<!--无序列表-->
<b>HTML初识</b>
<ul>
    <li>第一章</li>
    <li>第二章</li>
    <li>第三章</li>
</ul>

<!--有序列表-->
<b>计划</b>
<ol>
  <li>早起</li>
  <li>散步</li>
  <li>阅读</li>
</ol>

<!--自定义列表-->
<dl>
    <dt><b>我的家乡</b></dt>
    <dd>第一章</dd>
    <dd>第二章</dd>
    <dd>第三章</dd>
</dl>

<div>
    <b>爱好</b>
    <ul>
        <li>篮球<label><input type="checkbox" name="hobby" value="1"></label></li>
        <li>足球<label><input type="checkbox" name="hobby" value="2"></label></li>
        <li>羽毛球<label><input type="checkbox" name="hobby" value="3"></label></li>
    </ul>
</div>

</body>
```

<p id="paragraph2_05" style="color:mediumpurple;font-size:18px">
    <b>五 表格标签 &lt;table&gt;</b>
</p>

```tex
<table>
	<tr>: 定义表格行
		<th>: 定义表头
		<td>: 定义表格单元

border: 表格边框

cellpadding: 内边距

cellspacing: 外边距.

width: 像素 百分比.（最好通过css来设置长宽）

<tr>: table row

    <th>: table head cell
        
    <td>: table data cell

rowspan:  单元格竖跨多少行

colspan:  单元格横跨多少列（即合并单元格）

<th>: table header <tbody>(不常用): 为表格进行分区.
```

**coding**


```html
<body>
<table border="3" cellpadding="10"
       cellspacing="5" width="300px"
>
    <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>年龄</th>
    </tr>
    <tr>
        <td>20197360</td>
        <td>刘嘉俊</td>
        <td>20</td>
    </tr>
</table>
</body>
```

<p id="paragraph2_06" style="color:mediumpurple;font-size:18px">
    <b>六 表单标签 &lt;form&gt;</b>
</p>


- 表单用于向服务器传输数据。
- 表单能够包含 [input 元素](http://www.w3school.com.cn/tags/tag_input.asp)，比如文本字段、复选框、单选框、提交按钮等等。
- 表单还可以包含[textarea](http://www.w3school.com.cn/tags/tag_textarea.asp)、select、[fieldset](http://www.w3school.com.cn/tags/tag_fieldset.asp)和 [label 元素](http://www.w3school.com.cn/tags/tag_label.asp)。

1. **表单属性**

   + HTML 表单用于接收不同类型的用户输入，用户提交表单时向服务器传输数据，从而实现用户与Web服务器的交互。表单标签, 要提交的所有内容都应该在该标签中.
   + **action**: 表单提交到哪。 一般指向服务器端一个程序，程序接收到表单提交过来的数据（即表单元素值）作相应处理，比如https://www.sogou.com/web
   + **method**: 表单的提交方式 post/get 默认取值就是get。 get/post是常见的两种请求方式.
     - **get**
       1. 提交的键值对放在地址栏url后面。
       2. 安全性相对较差。
       3. 对提交内容的长度有限制。
     - **post**
       1. 提交的键值对不在地址栏。
       2. 安全性相对较高。
       3. 对提交内容的长度理论上无限制。

2. **表单元素**

   <p style="color:mediumaquamarine"><b>&lt;input&gt;标签属性和对应值</b></p>

   - **type**

     + text 文本输入框
     + password 密码输入框
     + radio 单选框
     + checkbox 复选框
     + submit 提交按钮
     + button 触发按钮（需要配合js使用）button和submit的区别？
     + file 提交文件：form表单需要加上属性enctype="multipart/form-data"

   - **name**

     表单提交项的**键**。注意和id属性的区别：name属性是和服务器通信时使用的名称；而id属性是浏览器端使用的名称，该属性主要是为了方便客户端编程，而在css和javascript中使用的。

   - **value**

     表单提交项的值.对于不同的输入类型，value 属性的用法也不同：

     ```html
     type="button", "reset", "submit"	- 定义按钮上的显示文本
     type="text", "password", "hidden" 	- 定义输入字段的初始值
     type="checkbox", "radio", "image"	- 定义与输入关联的值
     ```

   - **checked**

     radio 和 checkbox 默认被选中

   - **readonly**

     只读. text 和 password

   - **disabled**

     对所用input都好使.

     **上传文件注意两点**

     1. 请求方式必须是post。

     2. enctype=“multipart/form-data"

        ```python
        def index(request):
            print request.POST
            print request.GET
            print request.FILES
            for item in request.FILES:
                fileObj = request.FILES.get(item)
                f = open(fileObj.name, 'wb')
                iter_file = fileObj.chunks()
                for line in iter_file:
                    f.write(line)
                f.close()
            return HttpResponse('ok')
        ```

   <p style="color:mediumaquamarine"><b>&lt;select&gt;下拉选项标签属性</b></p>

   ```html
   name:表单提交项的键.
   
   size：选项个数
   
   multiple：multiple 
   
   <option> 下拉选中的每一项 属性：
       value:表单提交项的值.   selected: selected下拉选默认被选中
   <optgroup>为每一项加上分组
   ```

   









```html
常用格式
<p style="color:mediumpurple"><b>&lt;select&gt;下拉选项标签属性</b></p>
<p id="paragraph1_01" style="color:mediumpurple">
    <b>content</b>
</p>
```



















