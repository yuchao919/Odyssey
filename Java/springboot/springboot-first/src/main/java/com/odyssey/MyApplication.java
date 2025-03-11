package com.odyssey;

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
  @RequestMapping("/")
  String home() {
    return "Hello World!";
  }

  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}