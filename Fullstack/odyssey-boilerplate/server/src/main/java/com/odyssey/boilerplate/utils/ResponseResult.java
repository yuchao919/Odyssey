package com.odyssey.boilerplate.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseResult<T> {
  private Integer code;
  private String message;
  private T data;

  public static <T> ResponseResult<T> success(T data) {
    return new ResponseResult<>(200, "success", data);
  }

  public static <T> ResponseResult<T> fail(String message) {
    return new ResponseResult<>(500, message, null);
  }
}