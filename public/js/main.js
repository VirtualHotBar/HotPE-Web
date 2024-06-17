
if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
    document.getElementsByTagName("title")[0].innerText = 'HotPE - 一个纯净、强大、优雅的PE工具箱';
}

if (window.location.host.substring(0,window.location.host.indexOf(".")) != "www" && window.location.host.substring(0,window.location.host.indexOf(".")) != ""  && window.location.host.substring(0,window.location.host.indexOf(".")) != "bak"){
    window.open ( 'https://www.hotpe.top' + window.location.pathname, '_self');
}
