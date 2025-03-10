# execute

```ps1
    javac -d .\target .\com\javatpoint\Student.java
    javac -d .\target .\com\javatpoint\Address.java
    javac -d .\target .\com\javatpoint\Employee.java
    javac -cp ".\target;.\lib\com.springsource.org.apache.commons.logging-1.1.1.jar;.\lib\org.springframework.beans-3.0.1.RELEASE-A.jar;.\lib\org.springframework.core-3.0.1.RELEASE-A.jar" -d .\target .\com\javatpoint\Test.java

    java -cp ".;.\target;.\target\models;.\lib\com.springsource.org.apache.commons.logging-1.1.1.jar;.\lib\org.springframework.beans-3.0.1.RELEASE-A.jar;.\lib\org.springframework.core-3.0.1.RELEASE-A.jar" com.javatpoint.Test

```