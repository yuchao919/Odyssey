package com.odyssey.boilerplate.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(@NonNull CorsRegistry registry) {
    registry.addMapping("/**") // 所有接口
        .allowedOrigins("http://localhost:51666") // Vue前端地址
        .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许的方法
        .allowedHeaders("*") // 允许所有头部
        .allowCredentials(true); // 允许凭证（如Cookie）
  }
}
