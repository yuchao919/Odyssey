package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.interfaces.IFilingNode;
import com.nodechangedemo.models.StepCodeEnum;

public class BidDocService implements IFilingNode {

    private FilingNodeService _nodeService = new FilingNodeService();

    private static final String _stepCode = StepCodeEnum.BidDoc;

    @Override
    public void init(UUID cgSolutionGUID) {
        System.out.println("BidFile 初始化");
    }

    public void audit(UUID sid) {
        System.out.println("招标文件：" + sid + "审核通过");
        _nodeService.finishNode(sid, _stepCode);
    }

    public void cancelAudit(UUID sid) {
        System.out.println("招标文件：" + sid + "取消审核");
        _nodeService.backToNode(sid, _stepCode);
    }
}
