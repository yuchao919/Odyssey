package com.nodechangedemo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

import com.nodechangedemo.interfaces.IFilingNode;
import com.nodechangedemo.models.CgSolutionNode;
import com.nodechangedemo.models.MockDatabase;
import com.nodechangedemo.models.NodeStateEnum;
import com.nodechangedemo.models.StepCodeEnum;

public class FilingNodeService {

    private CgSolutionService _cgSolutionService = new CgSolutionService();

    private BidDocService _bidDocService = new BidDocService();

    private SignContractService _signContractService = new SignContractService();

    public IFilingNode getNodeService(String nodeCode) {
        switch (nodeCode) {
            case StepCodeEnum.BidDoc:
                return _bidDocService;
            case StepCodeEnum.SignContract:
                return _signContractService;
            default:
                break;
        }

        return null;
    }

    public void start(UUID sid) {
        // 删除旧节点
        MockDatabase.NodeList.removeIf(x -> Objects.equals(x.CgSolutionGUID, sid));

        // 初始化节点
        List<String> nodeCodeList = new ArrayList<>(Arrays.asList(
                StepCodeEnum.Solution,
                StepCodeEnum.BidDoc,
                StepCodeEnum.SignContract));
        for (int i = 0; i < nodeCodeList.size(); i++) {
            MockDatabase.NodeList.add(new CgSolutionNode(nodeCodeList.get(i), i, sid));
        }

        // 第一个节点结束
        MockDatabase.NodeList.get(0).NodeState = NodeStateEnum.Finished;
        System.out.println("节点扭转服务：采购过程：" + sid + " 开始，所有节点初始化！");
    }

    public void finishNode(UUID sid, String nodeCode) {
        // 结束上一个节点
        Stream<CgSolutionNode> nodeStream = MockDatabase.NodeList.stream();
        Optional<CgSolutionNode> currentNode = nodeStream
                .filter(x -> Objects.equals(x.CgSolutionGUID, sid) && Objects.equals(x.NodeCode, nodeCode))
                .findFirst();
        if (!currentNode.isPresent()) {
            System.err.println("节点扭转服务：节点错误！");
        }
        // 调用下一个的节点服务的Init方法
        Optional<CgSolutionNode> nextNode = nodeStream.filter(x -> x.OrderNum > currentNode.get().OrderNum)
                .sorted((p1, p2) -> Integer.compare(p1.OrderNum, p2.OrderNum)).findFirst();
        // 不存在下个节点则直接结束
        if (!nextNode.isPresent()) {
            _cgSolutionService.complete(sid);
        }

        IFilingNode nextNodeService = getNodeService(nextNode.get().NodeCode);
        if (Objects.isNull(nextNodeService)) {
            System.err.println("节点扭转服务：" + nextNode.get().NodeCode + "节点服务不存在");
        }
        nextNodeService.init(sid);
    }

    public void backToNode(UUID sid, String backToNodeCode) {
        // 取消当前的状态
        // 重新把上一个节点改成执行中状态
    }

}
