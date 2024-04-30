package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.interfaces.IFilingNode;
import com.nodechangedemo.models.StepCodeEnum;

public class BidDocAppService implements IFilingNode {

    private FilingNodeService _nodeService;

    private static final String _stepCode = StepCodeEnum.BidDoc;

    public void setNodeService(FilingNodeService service) {
        this._nodeService = service;
    }

    @Override
    public void init(UUID sid) {
        System.out.println(sid + "招标文件：初始化");
    }

    public void audit(UUID sid) {
        System.out.println(sid + "招标文件：审核通过");
        _nodeService.finishNode(sid, _stepCode);
    }

    public void cancelAudit(UUID sid) {
        System.out.println(sid + "招标文件：取消审核");
        _nodeService.backToNode(sid, _stepCode);
    }
}
