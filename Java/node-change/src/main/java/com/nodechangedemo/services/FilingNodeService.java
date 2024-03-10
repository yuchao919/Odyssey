package com.nodechangedemo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import com.nodechangedemo.interfaces.IFilingNode;
import com.nodechangedemo.models.CgSolutionNode;
import com.nodechangedemo.models.MockDatabase;
import com.nodechangedemo.models.NodeStateEnum;
import com.nodechangedemo.models.StepCodeEnum;

public class FilingNodeService {

    private CgSolutionService _solutionService = new CgSolutionService();

    private Map<String, IFilingNode> _serviceMap = new HashMap<>();

    public void addService(String nodeCode, IFilingNode service) {
        if (_serviceMap.containsKey(nodeCode)) {
            return;
        }
        _serviceMap.put(nodeCode, service);
    }

    public IFilingNode getNodeService(String nodeCode) {
        return _serviceMap.get(nodeCode);
    }

    public void start(UUID sid) {
        // 删除旧节点
        MockDatabase.NodeList.removeIf(x -> Objects.equals(x.CgSolutionGUID, sid));

        // 初始化节点
        List<String> nodeCodeList = new ArrayList<>(Arrays.asList(
                StepCodeEnum.CgSolution,
                StepCodeEnum.BidDoc,
                StepCodeEnum.SignContract));
        for (int i = 0; i < nodeCodeList.size(); i++) {
            MockDatabase.NodeList.add(new CgSolutionNode(nodeCodeList.get(i), i, sid));
        }

        println(sid + "节点服务：采购过程开始，所有节点初始化！");
        // 第一个节点结束
        finishNode(sid, StepCodeEnum.CgSolution);
    }

    public void finishNode(UUID sid, String nodeCode) {
        // 结束上一个节点
        Optional<CgSolutionNode> currentNode = MockDatabase.NodeList.stream()
                .filter(x -> Objects.equals(x.CgSolutionGUID, sid) && Objects.equals(x.NodeCode, nodeCode))
                .findFirst();
        if (!currentNode.isPresent()) {
            System.err.println(sid + "节点服务：节点错误！");
            return;
        }
        currentNode.get().NodeState = NodeStateEnum.Finished;
        println(sid + "节点服务：" + currentNode.get().NodeCode + "完成");
        // 调用下一个的节点服务的Init方法
        Optional<CgSolutionNode> nextNode = MockDatabase.NodeList.stream()
                .filter(x -> x.OrderNum > currentNode.get().OrderNum)
                .sorted((p1, p2) -> Integer.compare(p1.OrderNum, p2.OrderNum)).findFirst();
        // 不存在下个节点则直接结束
        if (!nextNode.isPresent()) {
            _solutionService.complete(sid);
            return;
        }

        IFilingNode nextNodeService = getNodeService(nextNode.get().NodeCode);
        if (Objects.isNull(nextNodeService)) {
            System.err.println(sid + "节点服务：" + nextNode.get().NodeCode + "节点服务不存在");
            return;
        }

        nextNodeService.init(sid);
        nextNode.get().NodeState = NodeStateEnum.Doing;
        println(sid + "节点服务：" + nextNode.get().NodeCode + "进行中");
    }

    public void backToNode(UUID sid, String backToNodeCode) {
        // 找到需要回退的节点
        Optional<CgSolutionNode> backNode = MockDatabase.NodeList.stream()
                .filter(x -> Objects.equals(x.CgSolutionGUID, sid) && Objects.equals(x.NodeCode, backToNodeCode))
                .findFirst();
        if (!backNode.isPresent()) {
            System.err.println(sid + "节点服务：" + backToNodeCode + "节点未找到！");
            return;
        }
        // 重新把回退节点改成执行中状态
        backNode.get().NodeState = NodeStateEnum.Doing;
        println(sid + "节点服务：" + backNode.get().NodeCode + "进行中");

        // 其余节点改成未开始
        List<CgSolutionNode> afterNodeList = MockDatabase.NodeList.stream()
                .filter(x -> x.OrderNum > backNode.get().OrderNum).collect(Collectors.toList());
        afterNodeList.forEach(x -> {
            if (x.NodeState != NodeStateEnum.NotStart) {
                println(sid + "节点服务：" + x.NodeCode + "恢复成未开始");
            }
        });

    }

    private void println(String msg) {
        System.out.println("\033[35m" + msg + "\033[0m");
    }

}
