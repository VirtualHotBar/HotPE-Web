
if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
    document.getElementsByTagName("title")[0].innerText = 'HotPE - 一个纯净、强大、优雅的PE工具箱';
}

if (location.host !== "www.hotpe.top") {
    const { pathname, search, hash } = location;
    location.replace(`https://www.hotpe.top${pathname}${search}${hash}`);
}
