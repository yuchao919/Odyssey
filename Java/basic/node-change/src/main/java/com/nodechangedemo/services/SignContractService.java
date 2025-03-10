package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.interfaces.IFilingNode;
import com.nodechangedemo.models.StepCodeEnum;

public class SignContractService implements IFilingNode {

    private FilingNodeService _nodeService;

    public void setNodeService(FilingNodeService service) {
        this._nodeService = service;
    }

    public void init(UUID sid) {
        System.out.println(sid + "签约：初始化");
    }

    public void audit(UUID sid) {
        System.out.println(sid + "签约：审核通过");

        _nodeService.finishNode(sid, StepCodeEnum.SignContract);
    }

}
