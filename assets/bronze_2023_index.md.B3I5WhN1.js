import{_ as e,c as a,o as r,a2 as o}from"./chunks/framework.CWo5xHl-.js";const m=JSON.parse('{"title":"牛吃了多少草  2302青铜组第1题","description":"","frontmatter":{},"headers":[],"relativePath":"bronze/2023/index.md","filePath":"bronze/2023/index.md"}'),n={name:"bronze/2023/index.md"},t=o(`<p>word-wrap: break-word; /* 当单词太长无法在一行内容纳时，自动将单词拆分成多行 <em>/ word-break: break-all; /</em> 允许在单词内换行 */</p><h1 id="牛吃了多少草-2302青铜组第1题" tabindex="-1">牛吃了多少草 2302青铜组第1题 <a class="header-anchor" href="#牛吃了多少草-2302青铜组第1题" aria-label="Permalink to &quot;牛吃了多少草  2302青铜组第1题&quot;">​</a></h1><h2 id="知识点-数组遍历" tabindex="-1">知识点：数组遍历 <a class="header-anchor" href="#知识点-数组遍历" aria-label="Permalink to &quot;知识点：数组遍历&quot;">​</a></h2><h2 id="_00【原题】" tabindex="-1">00【原题】 <a class="header-anchor" href="#_00【原题】" aria-label="Permalink to &quot;00【原题】&quot;">​</a></h2><p>Bessie is a hungry cow. Each day, for dinner, if there is a haybale in the barn, she will eat one haybale. Farmer John does not want Bessie to starve, so some days he sends a delivery of haybales, which arrive in the morning (before dinner). In particular, on day di, Farmer John sends a delivery of bi haybales (1≤di≤10<strong>14, 1≤bi≤10</strong>9).</p><p>Compute the total number of haybales Bessie will eat during the first T days. USACO，美国计算机奥林匹克竞赛，是一项认可度极高的比赛。 有青铜、白银、黄金、铂金四个级别，每年12-3月举办四期比赛，优胜者晋级。</p><pre><code>主要算法：双指针、贪婪、洪水填充、TTC、并查集、DP、前缀和、区间和、二分查找、DFS、BFS、MST、分治、 递归、坐标压缩、递增栈、扫描线、线段树、RMQ、LCA等

相关赛事：ACM、NOI 、CCPC、蓝桥杯 
</code></pre><h2 id="_01-【读题】" tabindex="-1">01 【读题】 <a class="header-anchor" href="#_01-【读题】" aria-label="Permalink to &quot;01 【读题】&quot;">​</a></h2><p>牛每天吃一捆草，人不定期送n捆草。（没草就饿着）</p><p>T天共吃多少草？</p><h2 id="_02【算法1】" tabindex="-1">02【算法1】 <a class="header-anchor" href="#_02【算法1】" aria-label="Permalink to &quot;02【算法1】&quot;">​</a></h2><p>1、维护两个变量，</p><pre><code>    a一共送了多少草

    b可以吃到哪一天
</code></pre><p>2、遍历每次送草，第k天，m捆草</p><pre><code>   a+=m

   如果送草日子k&gt;b，说明草吃完了，b=k+m-1

   如果送草日子k&lt;=b，说明草还没吃完，日子续上 b+=m
</code></pre><p>3、最终结束的时候，如果b&gt;T,说明还有剩余c=b-T</p><p>4、送了多少草a，剩下多少草c，a-c就是吃的草数量</p><p>03【难度】</p><p>非常友好，略低于青铜级别平均</p><h2 id="_04【原题链接】" tabindex="-1">04【原题链接】 <a class="header-anchor" href="#_04【原题链接】" aria-label="Permalink to &quot;04【原题链接】&quot;">​</a></h2><p><a href="https://usaco.org/index.php?page=viewproblem2&amp;cpid=1299" target="_blank" rel="noreferrer">https://usaco.org/index.php?page=viewproblem2&amp;cpid=1299</a></p><h2 id="【赛事介绍】" tabindex="-1">【赛事介绍】 <a class="header-anchor" href="#【赛事介绍】" aria-label="Permalink to &quot;【赛事介绍】&quot;">​</a></h2><div> USACO，美国计算机奥林匹克竞赛，是一项认可度极高的比赛。 有青铜、白银、黄金、铂金四个级别，每年12-3月举办四期比赛，优胜者晋级。 <pre><code>主要算法：双指针、贪婪、洪水填充、TTC、并查集、DP、前缀和、区间和、二分查找、DFS、BFS、MST、分治、 递归、坐标压缩、递增栈、扫描线、线段树、RMQ、LCA等

相关赛事：ACM、NOI 、CCPC、蓝桥杯 
</code></pre></div><p>word-wrap: break-word; /* 当单词太长无法在一行内容纳时，自动将单词拆分成多行 <em>/ word-break: break-all; /</em> 允许在单词内换行 */</p>`,24),i=[t];function d(h,s,p,l,c,b){return r(),a("div",null,i)}const u=e(n,[["render",d]]);export{m as __pageData,u as default};
