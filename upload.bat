@echo off
pause
echo "select option:"
echo "1.- upload to: http://site78.wdd.francistuttle.edu/"
echo "2.- upload to different location"
set /p answ = ">>>: "
IF "%answ%" == "1" goto :answ
  ftp open site78.wdd.francistuttle.edu
  student78.site78
  blue73shoe
:answ
