import{_ as a,c as e,o as t,a4 as o,a3 as i}from"./chunks/framework.DICQ8_im.js";const f=JSON.parse('{"title":"洪水填充算法","description":"","frontmatter":{},"headers":[],"relativePath":"al/flood.md","filePath":"al/flood.md"}'),r={name:"al/flood.md"},l=o('<h1 id="洪水填充算法" tabindex="-1">洪水填充算法 <a class="header-anchor" href="#洪水填充算法" aria-label="Permalink to &quot;洪水填充算法&quot;">​</a></h1><ul><li><p>洪水填充形象的描述就是，一个网格中，每个单元格有高和低，将水倒入某个“低”单元格，水会流到所有相连通的“低单元格”中，直到倒满。水的逐步扩散的过程和BFS遍历过程是一致的。</p></li><li><p>洪水填充是一种思想，它反映的是，某个单元格/节点和相邻单元格/节点的连通性/相同性。具体实现，可以用BFS或DFS遍历</p></li><li><p>二维网格中运用 Finding connected components in a graph represented by a grid.</p></li><li><p>图中运用 把一个图，分拆成多棵树，每棵树通过BFS或DFS遍历的过程，就是洪水填充算法</p></li></ul><h1 id="usaco真题解析" tabindex="-1">USACO真题解析 <a class="header-anchor" href="#usaco真题解析" aria-label="Permalink to &quot;USACO真题解析&quot;">​</a></h1><p><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NzM2Mjk0Mw==&amp;action=getalbum&amp;album_id=3392371901871685640#wechat_redirect" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NzM2Mjk0Mw==&amp;action=getalbum&amp;album_id=3392371901871685640#wechat_redirect</a><img src="'+i+'"></p>',4),p=[l];function n(_,c,s,m,d,h){return t(),e("div",null,p)}const b=a(r,[["render",n]]);export{f as __pageData,b as default};