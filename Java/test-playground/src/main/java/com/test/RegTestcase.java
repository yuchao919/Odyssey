package com.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegTestcase {

  public static void demo() {
    String str = "<p>123123啊实打实的</p><p><img src=\"/ajax/Mysoft.Map6.Modeling.Handlers.ControlAjaxHandler/RichtextEditorGetImage?fileGuid=08dd56d6-46ad-4034-f8df-dce220c003fc\"></p><p>123123123</p><p><br></p>";
    // 示例字符串
    String input = str
        + "Here is a URL: /ajax/Mysoft.Map6.Modeling.Handlers.ControlAjaxHandler/RichtextEditorGetImage?fileGuid=08dd56d6-46ad-4034-f8df-dce220c003fc "
        + "and another one: /ajax/Mysoft.Map6.Modeling.Handlers.ControlAjaxHandler/RichtextEditorGetImage?fileGuid=12345678-1234-5678-1234-567812345678";

    // 正则表达式，使用捕获组提取 fileGuid
    String regex = "/ajax/Mysoft\\.Map6\\.Modeling\\.Handlers\\.ControlAjaxHandler/RichtextEditorGetImage\\?fileGuid=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})";

    // 编译正则表达式
    Pattern pattern = Pattern.compile(regex);
    Matcher matcher = pattern.matcher(input);

    // 用于存储替换后的结果
    StringBuffer result = new StringBuffer();

    // 查找并替换
    while (matcher.find()) {
      // 提取 fileGuid
      String fileGuid = matcher.group(1);

      // 构造替换内容
      String replacement = "/api/Mysoft.Map6.FileManager.AppServices.FileManagerAppService/GetImageThumb?documentGuid="
          + fileGuid;

      // 将匹配到的内容替换为新的内容
      matcher.appendReplacement(result, replacement);
    }

    // 添加剩余未匹配的部分
    matcher.appendTail(result);

    // 输出结果
    System.out.println("Modified string:");
    System.out.println(result.toString());

  }
}
