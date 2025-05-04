package com.odyssey.boilerplate.controllers;

import java.util.List;
import java.util.UUID;

import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.odyssey.boilerplate.entities.User;
import com.odyssey.boilerplate.services.UserService;
import com.odyssey.boilerplate.utils.ResponseResult;

@RestController
@RequestMapping("/api/users")
public class UserController {
  @Autowired
  private UserService userService;

  // 新增用户接口（原有）
  @PostMapping("/addUser")
  public ResponseResult<Integer> addUser(@RequestBody User user) {
    int result = userService.addUser(user);
    return result > 0 ? ResponseResult.success(user.getId()) : ResponseResult.fail("新增失败");
  }

  // 新增查询所有用户接口
  @PostMapping("/getAllUsers")
  public ResponseResult<List<User>> getAllUsers() {
    return ResponseResult.success(userService.getAllUsers());
  }

  // 新增查询所有用户接口
  @PostMapping("/queryUsers")
  public ResponseResult<List<User>> queryUsers() {
    return ResponseResult.success(userService.queryUsers());
  }

  // 更新用户
  @PostMapping("/updateUser")
  public ResponseResult<Integer> updateUser(@RequestBody User user) {
    int result = userService.updateUser(user);
    return result > 0 ? ResponseResult.success(user.getId()) : ResponseResult.fail("更新失败");
  }

  // 删除用户
  @PostMapping("/deleteUsers")
  public ResponseResult<Null> deleteUsers(@RequestBody List<Integer> userIds) {
    int result = userService.deleteUsers(userIds);
    return result > 0 ? ResponseResult.success(null) : ResponseResult.fail("删除失败");
  }
}