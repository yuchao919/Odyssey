package com.nodechangedemo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.nodechangedemo.interfaces.FilingNode;
import com.nodechangedemo.models.CgSolutionNode;
import com.nodechangedemo.models.MockDatabase;

public class FilingNodeService {

    private CgSolutionService _solutionService = new CgSolutionService();

    public void start(UUID sid) {
        System.out.println("创建 采购过程 节点！");
        System.out.println("创建 签约 节点！");
        MockDatabase.NodeList.add(new CgSolutionNode("CgSolution", sid));
        MockDatabase.NodeList.add(new CgSolutionNode("BidFile", sid));
        MockDatabase.NodeList.add(new CgSolutionNode("SignContract", sid));
        System.out.println("采购过程：" + sid + " 开始，所有节点初始化！");
    }

    public void finishNode(UUID sid, String nodeCode) {

        // 结束上一个节点
        // 调用下一个的节点服务的Init方法

    }

    public void back(UUID sid, String backToNodeCode) {
        // 取消当前的状态
        // 重新把上一个节点改成执行中状态
    }

}
