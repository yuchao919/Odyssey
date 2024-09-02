# Note


```ps1
  # Need to change java_home if you have multiple versions of java.
  $env:JAVA_HOME="C:\Users\yuc05\scoop\apps\openjdk17\current"

  # Generate war package
  mvn clean package

  # Copy the hello.war file in the targets folder to the webapp directory in the catalina directory.
  

  # You need to run the “catalina run” command with cmd, not powershell, otherwise the output will be garbled.
  chcp 65001
  catalina run
```