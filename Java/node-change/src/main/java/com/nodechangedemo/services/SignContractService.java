package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.interfaces.FilingNode;

public class SignContractService implements FilingNode {

    private FilingNodeService _nodeService = new FilingNodeService();

    public void init(UUID sid) {
        System.out.println("SignContract Init");
    }

    public void finish(UUID sid) {
        System.out.println("SignContract Finished");

        _nodeService.finishNode(sid, "SignContract");
    }

}
