package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import com.example.demo.util.ResponseResult;

@RestController
@RequestMapping("/users")
public class UserController {
  @Autowired
  private UserService userService;

  // 新增用户接口（原有）
  @PostMapping("/addUser")
  public ResponseResult<String> addUser(@RequestBody User user) {
    int result = userService.addUser(user);
    return result > 0 ? ResponseResult.success("新增成功，ID：" + user.getId()) : ResponseResult.fail("新增失败");
  }

  // 新增查询所有用户接口
  @PostMapping("/getAllUsers")
  public ResponseResult<List<User>> getAllUsers() {
    return ResponseResult.success(userService.getAllUsers());
  }
}