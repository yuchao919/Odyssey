package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.interfaces.IFilingNode;

public class SignContractService implements IFilingNode {

    private FilingNodeService _nodeService = new FilingNodeService();

    public void init(UUID sid) {
        System.out.println("SignContract 初始化");
    }

    public void finish(UUID sid) {
        System.out.println("SignContract 结束");

        _nodeService.finishNode(sid, "SignContract");
    }

}
