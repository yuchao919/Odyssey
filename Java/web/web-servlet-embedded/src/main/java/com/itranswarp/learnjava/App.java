package com.itranswarp.learnjava;

import java.io.File;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.WebResourceRoot;
import org.apache.catalina.startup.Tomcat;
import org.apache.catalina.webresources.DirResourceSet;
import org.apache.catalina.webresources.StandardRoot;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) throws LifecycleException {
        int pageSize = 1;
        String str = String.valueOf(pageSize);

        System.out.println(str);
        // // 启动Tomcat:
        // Tomcat tomcat = new Tomcat();
        // tomcat.setPort(Integer.getInteger("port", 8080));
        // tomcat.getConnector();
        // // 创建webapp:
        // Context ctx = tomcat.addWebapp("", new
        // File("src/main/webapp").getAbsolutePath());
        // WebResourceRoot resources = new StandardRoot(ctx);
        // resources.addPreResources(
        // new DirResourceSet(resources, "/WEB-INF/classes", new
        // File("target/classes").getAbsolutePath(), "/"));
        // ctx.setResources(resources);
        // tomcat.start();
        // tomcat.getServer().await();
    }
}
