package com.odyssey.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class homeController {

  @RequestMapping("/")
  String home() {
    return "index.html";
  }
}
