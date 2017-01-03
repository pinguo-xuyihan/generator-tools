<template>
	<div class="home-con">
		<ul>
			<h1>Guide</h1>
				<hr/>
				<blockquote>
				<p>你选择的方案为： vue + webpack + vue-router + es6 
            <%if(includePgBridge){%>
            + PGBridge + PGTool
            <%}%>
            <%if(includeCommonTool){%>
            + PGCommon
            <%}%>
            <%if(includeImageHandles){%>
            + PGClip + fileReader
            <%}%>
            </p>
				</blockquote>
				<hr/>
				<h4>访问你的项目</h4>
				<p>默认url是<a href="http://localhost:8080&quot;">http://localhost:8080&quot;</a> vue会在后面后面自己加上的hash的，或者是<a href="http://localhost:8080#index&quot;">http://localhost:8080#index&quot;</a></p>
				<hr/>
				<h4>编辑你的项目</h4>
				<p>首先#index对应的页面在app/page下面，找到index.vue修改即可</p>
				<p>vue的html是自己的模板，css也不再是js了，不过需要写在一个文件中，css可以提出去import</p>

				<hr/>
				<h4>新增一个页面！</h4>
				<p>在根目录下的app.js文件中，增加路由就好啦~</p>

		</ul>
		<input type="button" v-link="{name : 'main'}" value="Click me goto Main Page" />
	</div>
</template>
<script>
	
</script>
<style >
h1, h2, h3, h4, h5, h6, p, blockquote {
   margin: 0;
   padding: 0;
}
body {
   font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;
   font-size: 13px;
   line-height: 18px;
   color: #737373;
   background-color: white;
   margin: 10px 13px 10px 13px;
}
table {
   margin: 10px 0 15px 0;
   border-collapse: collapse;
}
td,th { 
   border: 1px solid #ddd;
   padding: 3px 10px;
}
th {
   padding: 5px 10px; 
}

a {
   color: #0069d6;
}
a:hover {
   color: #0050a3;
   text-decoration: none;
}
a img {
   border: none;
}
p {
   margin-bottom: 9px;
}

h1, h2, h3, h4, h5, h6 {
   color: #404040;
   line-height: 36px;
}
h1 {
   margin-bottom: 18px;
   font-size: 30px;
}
h2 {
   font-size: 24px;
}
h3 {
   font-size: 18px;
}
h4 {
   font-size: 16px;
}
h5 {
   font-size: 14px;
}
h6 {
   font-size: 13px;
}
hr {
   margin: 0 0 19px;
   border: 0;
   border-bottom: 1px solid #ccc;
}
blockquote {
   padding: 13px 13px 21px 15px;
   margin-bottom: 18px;
   font-family:georgia,serif;
   font-style: italic;
}
blockquote:before {
   content:"\201C";
   font-size:40px;
   margin-left:-10px;
   font-family:georgia,serif;
   color:#eee;
}
blockquote p {
   font-size: 14px;
   font-weight: 300;
   line-height: 18px;
   margin-bottom: 0;
   font-style: italic;
}
code, pre {
   font-family: Monaco, Andale Mono, Courier New, monospace;
}
code {
   background-color: #fee9cc;
   color: rgba(0, 0, 0, 0.75);
   padding: 1px 3px;
   font-size: 12px;
   -webkit-border-radius: 3px;
   -moz-border-radius: 3px;
   border-radius: 3px;
}
pre {
   display: block;
   padding: 14px;
   margin: 0 0 18px;
   line-height: 16px;
   font-size: 11px;
   border: 1px solid #d9d9d9;
   white-space: pre-wrap;
   word-wrap: break-word;
}
pre code {
   background-color: #fff;
   color:#737373;
   font-size: 11px;
   padding: 0;
}
sup {
   font-size: 0.83em;
   vertical-align: super;
   line-height: 0;
}
* {
   -webkit-print-color-adjust: exact;
}
@media screen and (min-width: 914px) {
   body {
      width: 854px;
      margin:10px auto;
   }
}
@media print {
   body,code,pre code,h1,h2,h3,h4,h5,h6 {
      color: black;
   }
   table, pre {
      page-break-inside: avoid;
   }
}
</style>