package com.odyssey.boilerplate.mappers;

import org.apache.ibatis.annotations.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.odyssey.boilerplate.entities.User;

@Mapper
public interface UserMapper extends BaseMapper<User> {
  // 继承BaseMapper即包含insert()方法
}