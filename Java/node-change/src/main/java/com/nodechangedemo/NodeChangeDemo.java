package com.nodechangedemo;

import java.util.UUID;

import com.nodechangedemo.models.CgSolution;
import com.nodechangedemo.services.CgSolutionService;
import com.nodechangedemo.services.SignContractService;

public class NodeChangeDemo {

    private CgSolutionService _solutionService = new CgSolutionService();

    private SignContractService _signContractService = new SignContractService();

    public void run() {
        CgSolution cs = new CgSolution(UUID.fromString("f37d9dba-50c9-4dc8-a8a9-0fc6b0b2c356"));

        _solutionService.audit(cs.CgSolutionGUID);

        _signContractService.finish(cs.CgSolutionGUID);

        // _signContractService.cancelAudit(cs.CgSolutionGUID);

        _signContractService.finish(cs.CgSolutionGUID);

    }

}
