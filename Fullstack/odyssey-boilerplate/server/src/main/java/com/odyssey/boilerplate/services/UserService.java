package com.odyssey.boilerplate.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.odyssey.boilerplate.entities.User;
import com.odyssey.boilerplate.mappers.UserMapper;

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

  // 查询数据
  public List<User> queryUsers() {
    return getAllUsers();
  }

  /**
   * 更新用户
   * 
   * @param user 用户
   * @return
   */
  public int updateUser(User user) {
    User entity = userMapper.selectById(user.getId());
    entity.setName(user.getName());
    entity.setAge(user.getAge());
    entity.setEmail(user.getEmail());

    return userMapper.updateById(entity);
  }

  /**
   * 删除用户
   * 
   * @param userIds 用户编号
   * @return
   */
  public int deleteUsers(List<Integer> userIds) {
    return userMapper.deleteByIds(userIds);
  }

}