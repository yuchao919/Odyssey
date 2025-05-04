package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;

@Service
public class UserService {
  @Autowired
  private UserMapper userMapper;

  public int addUser(User user) {
    return userMapper.insert(user); // 返回插入的行数
  }

  // 查询所有用户方法
  public List<User> getAllUsers() {
    return userMapper.selectList(null); // null参数表示无条件查询
  }
}