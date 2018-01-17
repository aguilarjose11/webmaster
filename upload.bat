@echo off
echo "select option:"
echo "1.- upload to: http://site78.wdd.francistuttle.edu/"
echo "2.- upload to different location"
set /p answ = ">>>: "
IF "%answ%" == "1" goto :answ
  echo open site78.wdd.francistuttle.edu>>login.dat
  echo student78.site78>>login.dat
  echo blue73shoe>>login.dat
  ftp -s:login.dat
  pause
:answ
 echo working...
