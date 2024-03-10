package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.models.StepCodeEnum;

public class CgSolutionService {

    private FilingNodeService _nodeService = new FilingNodeService();

    public void audit(UUID sid) {
        System.out.println("采购方案：" + sid + "审核通过");
        _nodeService.start(sid);
    }

    public void cancelAudit(UUID sid) {
        System.out.println("采购方案：" + sid + "取消审核");
        _nodeService.backToNode(sid, StepCodeEnum.Solution);
    }

    public void complete(UUID sid) {
        System.out.println("采购方案：" + sid + "结束");
    }

}
