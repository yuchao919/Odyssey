package com.nodechangedemo;

import java.util.UUID;

import com.nodechangedemo.models.CgSolution;
import com.nodechangedemo.models.StepCodeEnum;
import com.nodechangedemo.services.BidDocAppService;
import com.nodechangedemo.services.CgSolutionService;
import com.nodechangedemo.services.FilingNodeService;
import com.nodechangedemo.services.SignContractService;

public class NodeChangeDemo {

    private FilingNodeService _nodeService = new FilingNodeService();

    private CgSolutionService _solutionService = new CgSolutionService();

    private BidDocAppService _bidDocService = new BidDocAppService();

    private SignContractService _signContractService = new SignContractService();

    public NodeChangeDemo() {
        _solutionService.setNodeService(_nodeService);
        _bidDocService.setNodeService(_nodeService);
        _signContractService.setNodeService(_nodeService);

        _nodeService.addService(StepCodeEnum.BidDoc, _bidDocService);
        _nodeService.addService(StepCodeEnum.SignContract, _signContractService);
    }

    public void run() {

        normal_test();
    }

    public void normal_test() {
        CgSolution cs = new CgSolution(UUID.fromString("f37d9dba-50c9-4dc8-a8a9-0fc6b0b2c356"));
        _solutionService.audit(cs.CgSolutionGUID);
        _bidDocService.audit(cs.CgSolutionGUID);
        _signContractService.audit(cs.CgSolutionGUID);

    }

    public void back_test() {
        CgSolution cs = new CgSolution(UUID.fromString("8343b51b-e97a-4357-ba10-0d31c8e9a882"));
        _solutionService.audit(cs.CgSolutionGUID);
        _solutionService.cancelAudit(cs.CgSolutionGUID);
    }

}
