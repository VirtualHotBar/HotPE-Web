/* https://hexo.fluid-dev.com/docs/advance/#hexo-%E6%B3%A8%E5%85%A5%E4%BB%A3%E7%A0%81
register 函数可接受三个参数，第一个参数是代码片段注入的位置，接受以下值：

head_begin: 注入在 <head> 之后（默认）
head_end: 注入在 </head> 之前
body_begin: 注入在 <body> 之后
body_end: 注入在 </body> 之前
第二个参数是注入的片段，可以是字符串，也可以是一个返回值为字符串的函数。

第三个参数是注入的页面类型，接受以下值：

default: 注入到每个页面（默认值）
home: 只注入到主页（is_home() 为 true 的页面）
post: 只注入到文章页面（is_post() 为 true 的页面）
page: 只注入到独立页面（is_page() 为 true 的页面）
archive: 只注入到归档页面（is_archive() 为 true 的页面）
category: 只注入到分类页面（is_category() 为 true 的页面）
tag: 只注入到标签页面（is_tag() 为 true 的页面）
或是其他自定义 layout 名称，例如在Fluid 主题中 about 对应关于页、links 对应友联页 */

hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/style.css">', 'default');
hexo.extend.injector.register('head_end', '<script type="text/javascript" src="/js/main.js"></script>', 'default');

/* //导入element-plus
hexo.extend.injector.register('head_end', `
<!-- Import style -->
<link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
<!-- Import Vue 3 -->
<script src="//unpkg.com/vue@3"></script>
<!-- Import component library -->
<script src="//unpkg.com/element-plus"></script>
`, 'default'); */

//bootstrap-icons
//hexo.extend.injector.register('head_end', '<link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.10.2/font/bootstrap-icons.css" rel="stylesheet">', 'default');

//Clarity统计
hexo.extend.injector.register('head_end', `<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ne5qq3eolp");
</script>`, 'default');

//51la统计
hexo.extend.injector.register('head_end', `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?407e6c7b912ca620b24fc8ffcd41a43c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
`, 'default');

//底部
hexo.extend.injector.register('body_end', `<footer style="background: var(--board-bg-color);margin: 0px 0px 0px 0px;text-align: center;" id="colophon" class="site-footer" role="contentinfo">
<div style="text-align: center;">
        <br>
        <p  style="text-align: center;margin-top: 1px;">
                <a href="/QQGroup/" target="_blank" class="class-link" rel="noopener"> <!--<i class="bi bi-tencent-qq"></i>-->  加入官方Q群</a>

                <!--<a href="https://github.com/VirtualHotBar/HotPEToolBox/issues" target="_blank" style="margin-left:90px" rel="noopener"> <i class="bi bi-question-circle"></i> 反馈问题</a>-->

        </p>

        <div style="max-width:90%;margin:0 auto;">
        <p style="text-align: center"><strong>友 情 链 接</strong></p>
        <p style="text-align: center">Project Web:
            <a href="https://www.netmount.cn/" target="_blank" class="class-link"  rel="noopener" > NetMount</a> |
            <a href="https://sysri.cn/" target="_blank" class="class-link"  rel="noopener" > SysRi</a> |
            <a href="https://winnew.cn/" target="_blank" class="class-link"  rel="noopener" > WinNew</a> |
            <a href="https://pic.hotpe.top/" target="_blank" class="class-link"  rel="noopener" > HotPic</a> |
            <a href="https://pan.hotpe.top/" target="_blank" class="class-link"  rel="noopener" > HotPan</a> |
            <a href="https://home.edgeless.top/" target="_blank" class="class-link"  rel="noopener" > Edgeless</a> |
            <a href="https://firpe.cn/" target="_blank" class="class-link"  rel="noopener" > FirPE</a> |
            <a href="https://windsys.win" target="_blank" class="class-link"  rel="noopener" > Windsys</a> |
            <a href="https://www.angel-pe.cn" target="_blank" class="class-link"  rel="noopener" > AngelPE</a> |
            <a href="http://cowpe.myzwq.cn/" target="_blank" class="class-link"  rel="noopener" > CowPE</a> |
            <a href="https://glasspe.cn/" target="_blank" class="class-link"  rel="noopener" > GlassPE</a> |
            <a href="https://dawnpe.com" target="_blank" class="class-link"  rel="noopener" > DawnPE</a> |
            <a href="https://glow.lovepc.team/" target="_blank" class="class-link"  rel="noopener nofollow" > GlowPE</a> |
            <a href="https://www.win-compe.top/" target="_blank" class="class-link"  rel="noopener noreferrer nofollow" > ComPE</a> |
            <a href="https://ldtstore.com.cn/ldtools/" target="_blank" class="class-link"  rel="noopener" > LDTools </a>
            <br>
        </p>
        <p style="text-align: center">Weblog:
            <a href="https://blog.hotpe.top/" target="_blank" class="class-link"  rel="noopener" >VirtualHotBar</a> |
            <a href="https://www.mefcl.com/" target="_blank" class="class-link"  rel="noopener" > Mefcl's blog</a> |
            <a href="https://www.puresys.net" target="_blank" class="class-link"  rel="noopener" > Puresys </a> |
            <a href="https://www.winos.me/" target="_blank" class="class-link"  rel="noopener" > WINOS </a> |
            <a href="https://www.coolexe.com/" target="_blank" class="class-link"  rel="noopener" > 阿酷杂货铺</a> |
            <a href="https://yukaidi.top/" target="_blank" class="class-link"  rel="noopener" > yukaidi的小站</a> |
            <a href="https://myzwq.com/" target="_blank" class="class-link"  rel="noopener" > 初念瑾-分享站 </a>|
            <a href="https://www.lvruanhome.com/" target="_blank" class="class-link"  rel="noopener" > 绿软之家 </a>|
            <a href="https://www.51cxsoft.com/" target="_blank" class="class-link"  rel="noopener" > 优捷易</a> |
            <a href="https://ruanjianya.net/" target="_blank" class="class-link"  rel="noopener" > 软件鸭 </a> | 
            <a href="https://www.pandadatech.cn/" target="_blank" class="class-link"  rel="noopener" > PanDaTech's Blog</a> |
            <a href="https://www.rsnocsi.cn/" target="_blank" class="class-link"  rel="noopener" > Abyss-博客 </a> |
            <a href="https://itlog.vip/" target="_blank" class="class-link"  rel="noopener" > 挨踢日记 </a>|
            <a href="https://www.letsdown.cn/" target="_blank" class="class-link"  rel="noopener" >Let's Down</a>
        </p>
        </div>


</div>

<div >
        <div style="border-top: 1px solid rgba(0, 0, 0, 0.1);padding: 10px 10px 10px;text-align: center;">
                <a href="https://beian.miit.gov.cn/" target="_blank" class="class-link"  rel="noopener" >蜀ICP备2023001640号-1</a>
                <br/>
                © 2019-Present <a href="https://blog.hotpe.top/" target="_blank" class="class-link"  rel="noopener" >VirtualHotBar</a>
<!--                 <br/>
                <br/>
                <a href="https://myzwq.com/" target="_blank"  rel="noopener" ><strong>HotPE服务器赞助商 : 初念瑾</strong></a>  -->
                
                
        </div>
</div>
</footer>`, 'default');
