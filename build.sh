@echo off
cd /d "%~dp0"

rd /s /q .\public\

cmd /c hexo clean

cmd /c hexo g

powershell -Command "(gc .\public\index.html -encoding UTF8 ) -replace ' - HotPE</title>', '</title>' | Out-File -Encoding UTF8  .\public\index.html"
powershell -Command "(gc .\public\index.html -encoding UTF8 ) -replace '<title>', '<title>HotPE - ' | Out-File -Encoding UTF8  .\public\index.html"

rd /s /q .\public\categories\
rd /s /q .\public\links\
rd /s /q .\public\xml\
rd /s /q .\public\tags\



