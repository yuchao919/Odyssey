@echo off

set option=
set /p option=


if "%option%" == "C" ( 
  net use Z: \\Avalon-nas\sshd-2000gb
  net use Y: \\Avalon-nas\oct-2014
  net use X: \\Avalon-nas\mar-2018
  net use W: \\Avalon-nas\dec-2014
) ^
else if "%option%" == "D" ( 
  net use * /delete
)