package com.odyssey;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// stereotype annotation, handling incoming web requests
@RestController
// meta-annotation,combines @SpringBootConfiguration, @EnableAutoConfiguration
// and @ComponentScan.
@SpringBootApplication
public class MyApplication {

  // annotation provides “routing” information.
  @RequestMapping("/hi")
  String home() {
    return "hello world";
  }

  public static void main(String[] args) {
    SpringApplication app = new SpringApplication(MyApplication.class);
    Properties props = new Properties();
    // props.setProperty("spring.profiles.active", "dev");
    // 优先级最低的方式，会被application.properties顶替掉
    props.setProperty("server.port", "50086");
    app.setDefaultProperties(props);
    app.run(args);
  }
}