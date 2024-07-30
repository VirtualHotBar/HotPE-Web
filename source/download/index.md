---
title: 下载
---



<div style="text-align: center;">

<h3 ><strong>下载HotPE及其组件</strong></h3>
<br/>
<p>立即下载将下载HotPE客户端不包含模块，<strong>下载模块</strong>请到下载站进行下载，官方搭建更安全。</p>
<p><strong>强烈建议您阅读<a class="class-link" href="https://docs.hotpe.top/" target="_blank" rel="noopener">文档</a>后再使用，在这里有HotPE的使用介绍和解决方案。</strong></p>

<br/>

<button class="button" onclick="downAndOpenThanksToDocsModal('https://api.hotpe.top/API/HotPE/ToLink/?id=down');">立即下载</button><button style="margin-left:50px;" class="button" onclick="window.open ('https://api.hotpe.top/API/HotPE/ToLink/?id=hpm-down-site', '_blank');">下载模块</button><button class="button" style="margin-left:50px;" onclick="window.open ( 'https://winnew.cn/', '_blank');">原版系统</button>




<br/>

<p>客户端版本:<span id="ClientVer">正在获取...</span><!-- 客户端大小:<span id="ClientSize">正在获取...</span> -->   PE版本:<span id="HotPEVer">正在获取...</span> </p>
<p ><span ><em>使用HotPE及其相关功能表示您已经阅读并同意<a href="https://docs.hotpe.top/overview/contract.html" target="_blank"  class="class-link"  rel="noopener">HotPE用户协议</a></em></span></p>
<p ><a onclick="downAndOpenThanksToDocsModal( 'https://api.hotpe.top/API/HotPE/ToLink/?id=down-bak1');"  class="class-link">备用下载1</a>      <a onclick="downAndOpenThanksToDocsModal ( 'https://api.hotpe.top/API/HotPE/ToLink/?id=down-bak2');" class="class-link">备用下载2</a>      <a onclick="downAndOpenThanksToDocsModal ( 'https://api.hotpe.top/API/HotPE/ToLink/?id=iso-down');" class="class-link">下载ISO镜像</a>      <span class="ant-tag ant-tag-blue" style="color: #008080;"><a onclick="downAndOpenThanksToDocsModal ( 'https://api.hotpe.top/API/HotPE/ToLink/?id=down-old');"  target="_blank"  class="class-link"  rel="noopener">旧版安装器</a></span>      <span class="ant-tag ant-tag-blue" style="color: #008080;"><a href="https://api.hotpe.top/API/HotPE/ToLink/?id=update-log" target="_blank"  class="class-link"  rel="noopener">更新日志</a></p>

</div>


<style>
  /* 解决遮罩在上问题 */
#board{
  z-index:auto
}
</style>


<script type="text/javascript">
//下载并打开文档引导窗口
function downAndOpenThanksToDocsModal(url){
  window.open (url, '_self');
  setTimeout(function(){$('#ThanksToDocsModal').modal('show');},2000);
}

//获取最新版本信息

const GetUpdate = new XMLHttpRequest();
GetUpdate.open("GET", 'https://api.hotpe.top/API/HotPE/GetUpdate/');
GetUpdate.send();

GetUpdate.onreadystatechange = (e) => {
    let updateData= JSON.parse(GetUpdate.response);
    
    document.getElementById("ClientVer").innerHTML = updateData["data"]["client"]["name"];
    document.getElementById("HotPEVer").innerHTML = updateData["data"]["pe"]["name"];
}

</script>
   
  <!-- 模态框 -->
  <div class="modal fade" id="ThanksToDocsModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">感谢您的下载！</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          强烈建议您阅读文档后再使用，在这里有HotPE的使用介绍和解决方案。
          <br/><br/>
          <a href="https://down.hotpe.top/Package" target="_blank"  class="class-link"  >没有开始下载</a>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="window.open ( 'https://docs.hotpe.top/started.html', '_self');" >好的</button>
        </div>
      </div>
    </div>
  </div>
  

