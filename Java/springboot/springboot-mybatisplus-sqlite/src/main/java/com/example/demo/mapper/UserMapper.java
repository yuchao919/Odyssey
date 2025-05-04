package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.User;

@Mapper
public interface UserMapper extends BaseMapper<User> {
  // 继承BaseMapper即包含insert()方法
}