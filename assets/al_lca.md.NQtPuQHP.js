import{_ as a,c as e,o as t,a2 as c,a4 as l}from"./chunks/framework.DpEepDfE.js";const u=JSON.parse('{"title":"LCA","description":"","frontmatter":{},"headers":[],"relativePath":"al/lca.md","filePath":"al/lca.md"}'),r={name:"al/lca.md"},i=c('<h1 id="lca" tabindex="-1">LCA <a class="header-anchor" href="#lca" aria-label="Permalink to &quot;LCA&quot;">​</a></h1><ul><li>一棵树中ab节点的最近共同祖先LCA</li><li>按dfs遍历顺序加入节点，假设a在前b在后，b加入时，dsu[a]就是他们的lca。</li><li>常见应用：一个树状路网，询问ab最短路径上的状态？先求出ab的lcac，再把ab最短路径分解成两段，ac和bc分别求解</li></ul><h1 id="usaco真题解析" tabindex="-1">USACO真题解析 <a class="header-anchor" href="#usaco真题解析" aria-label="Permalink to &quot;USACO真题解析&quot;">​</a></h1><p><a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NzM2Mjk0Mw==&amp;action=getalbum&amp;album_id=3554486101400862729#wechat_redirect" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NzM2Mjk0Mw==&amp;action=getalbum&amp;album_id=3554486101400862729#wechat_redirect</a><img src="'+l+'"></p>',4),o=[i];function _(s,m,n,p,d,h){return t(),e("div",null,o)}const f=a(r,[["render",_]]);export{u as __pageData,f as default};