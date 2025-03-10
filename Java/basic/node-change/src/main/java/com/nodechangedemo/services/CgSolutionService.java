package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.models.StepCodeEnum;

public class CgSolutionService {

    private FilingNodeService _nodeService;

    public void setNodeService(FilingNodeService service) {
        this._nodeService = service;
    }

    public void audit(UUID sid) {
        System.out.println(sid + "采购方案：审核通过");
        _nodeService.start(sid);
    }

    public void cancelAudit(UUID sid) {
        System.out.println(sid + "采购方案：取消审核");

        _nodeService.backToNode(sid, StepCodeEnum.CgSolution);
    }

    public void complete(UUID sid) {
        System.out.println(sid + "采购过程：结束");
    }

}
