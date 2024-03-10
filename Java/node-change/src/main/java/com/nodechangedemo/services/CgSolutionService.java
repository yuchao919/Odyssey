package com.nodechangedemo.services;

import java.util.UUID;

public class CgSolutionService {

    private FilingNodeService _nodeService = new FilingNodeService();

    public void audit(UUID sid) {
        System.out.println("采购过程：" + sid + "审核通过！");
        _nodeService.start(sid);
    }

    public void complete(UUID sid) {
        System.out.println("采购过程：" + sid + "结束！");
    }

}
