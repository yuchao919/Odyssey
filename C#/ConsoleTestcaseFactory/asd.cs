// /// <summary>
// /// 执行考核分析后台作业
// /// </summary>
// /// <param name="args"></param>
// // public virtual void ExecuteProviderAnalysisJob(ProviderAnalysisJobArg args)
// {
//     /*
//     * 注意事项：
//     * 1. 考核分析的考核得分数据更新目前只会在考核任务发起、审核、取消审核、作废，我的打分提交、修改、免考 这些场景下触发
//     * 2. 考核分析的定级结果会在综合定级的审核、取消审核时触发
//     * 2. 考核任务相关的更新，应该只更新其考核任务下的考核对象即可
//     * 3. 始终需要有个全量的更新，处理出厂场景
//     *
//     * 触发场景：
//     * 1. 考核记录：发起考核、作废
//     * 2. 我的打分：提交、取消提交、免考、取消免考
//     * 3. 定级：审核、审批通过、取消审核 告知受影响的范围
//     *
//     * 不同的表颗粒度：
//     * 年度总览:             ProviderGUID + ProviderTypeGUID + KhYear
//     * 考核明细:             ProviderGUID + ProviderTypeGUID + ContractGUID + ProjGUID + KhYear 
//     * KhEntity：           ProviderGUID + ProviderTypeGUID + ContractGUID + ProjGUID + KhYear + KhType // 因此这个表的数据没办法在考核分析业务中用起来
//     * 周期汇总:             ProviderGUID + ProviderTypeGUID + ProjGUID + KhYear + KhType + KhCycle  // 多个合同汇总平均
//     * KhAnalysisPeriod     ProviderGUID + ProviderTypeGUID + ContractGUID + ProjGUID + KhYear + KhType + KhCycle  合同独立
//     *
//     * 定级（集团模式）
//     * PGGradePlan2ProviderRecord：ProviderGUID + ProviderTypeGUID （ProviderRecordGUID） + 评估结束日期
//     *
//     * KhAnalysisPeriod AnalysisType 1，2，3 |1：周期汇总 | 2：考核明细  | 3：年度总览 
//     */

//     // 考核结果
// //     List<ProviderGrade> gradeList = _providerGradePS.Instance.GetAllGrades();
//     // 服务类别2考核类型权重
// //     Dictionary<Guid, Dictionary<int, decimal>> khWeightMap = _KhRulePS.Instance.GetProviderTypeKhTypeWeight();

//        using (var scope = new ConnectionScope(TransactionMode.Required))
//     {
//         // 判断受影响的考核对象
// //         Expression<Func<KhObject, bool>> khObjExp = x => 1 == 1;
//            Expression<Func<KhAnalysisPeriod, bool>> periodExp = x => 1 == 1;
//            if (args != null)
//         {
//             // 1. 考核记录：发起考核、作废
// //             if (args.KhRecordGUID.HasValue)
//         //  {
// //                 var range =
//         //      (
// //                     from ko in scope.AsQueryable<KhObject>()
//         //             join kr in scope.AsQueryable<KhRecord>() on ko.KhRecordGUID equals kr.KhRecordGUID
//         //             where kr.KhRecordGUID == args.KhRecordGUID.Value
//         //          select new
//                     {
// //                         ko.ProviderGUID,
//         //                 ko.ProviderTypeGUID
//         //          }
//                 );
//                 khObjExp = khObjExp.And(x => range.Any(r => r.ProviderGUID == x.ProviderGUID && r.ProviderTypeGUID == x.ProviderTypeGUID));
//                 periodExp = periodExp.And(x => range.Any(r => r.ProviderGUID == x.ProviderGUID && r.ProviderTypeGUID == x.ProviderTypeGUID));
//             }
//             // 2. 我的打分：提交、取消提交、免考、取消免考
// //             else if (args.KhObjectGUIDList != null && args.KhObjectGUIDList.Count > 0)
//         //  {
// //                 var range =
//         //      (
// //                     from ko in scope.AsQueryable<KhObject>().Where(x => args.KhObjectGUIDList.Contains(x.KhObjectGUID))
//         //          select new
//                     {
// //                         ko.ProviderGUID,
//         //                 ko.ProviderTypeGUID
//         //          }
//                 );
//                 khObjExp = khObjExp.And(x => range.Any(r => r.ProviderGUID == x.ProviderGUID && r.ProviderTypeGUID == x.ProviderTypeGUID));
//                 periodExp = periodExp.And(x => range.Any(r => r.ProviderGUID == x.ProviderGUID && r.ProviderTypeGUID == x.ProviderTypeGUID));
//             }
// //             else if (args.PGGradePlanGUID.HasValue)
//         //  {
// //                 var range =
//         //      (
// //                     from p2p in scope.AsQueryable<PGGradePlan2ProviderRecord>()
//         //             join pg in scope.AsQueryable<PGGradePlan>() on p2p.PGGradePlanGUID equals pg.PGGradePlanGUID
//         //             join pr in scope.AsQueryable<ProviderRecord>() on p2p.ProviderRecordGUID equals pr.ProviderRecordGUID
//         //             where pg.PGGradePlanGUID == args.PGGradePlanGUID.Value
//         //          select new
//                     {
// //                         pr.ProviderGUID,
//         //                 pr.ProviderTypeGUID
//         //          }
//                 );
//                 khObjExp = khObjExp.And(x => range.Any(r => r.ProviderGUID == x.ProviderGUID && r.ProviderTypeGUID == x.ProviderTypeGUID));
//                 periodExp = periodExp.And(x => range.Any(r => r.ProviderGUID == x.ProviderGUID && r.ProviderTypeGUID == x.ProviderTypeGUID));
//             }
//         }

//         // 所有考核分析数据：周期汇总、年度总览、考核明细
//         List<KhAnalysisPeriod> allPeriodListery = scope.AsQueryableAnalysisPeriocord   .WheperiodExp).ToList();

//         // 考核信息
//         var khRecordQuery = scope.AsQueryable<KhRecord>()
//                                  .Where(x => new List<int?>()
//                                     {
//                                                 KhStatusEnum.Launched,
//                                                 KhStatusEnum.Checking,
//                                                 KhStatusEnum.Checked
//                                     }.Contains(x.KhStatus)
//                                  );

//         var khObjectQuery = scope.AsQueryable<KhObject>().Where(khObjExp);
//         // 相关联的所有考核对象有效情况
//         var khObjectWideList =
//         (
//              from ko in khObjectQuery
//              join kr in khRecordQuery on ko.KhRecordGUID equals kr.KhRecordGUID
//              select new
//              {
//                  kr.ModifiedTime,
//                  kr.KhYear,
//                  kr.KhObjectType,
//                  kr.KhType,
//                  kr.KhCycle,
//                  ko.ProviderGUID,
//                  ko.ProviderTypeGUID,
//                  ko.BUGUID,
//                  ko.ProjGUID,
//                  ko.ProviderRecordGUID,
//                  ContractGUID = ko.ContractGUID ?? Guid.Empty,
//                  ContractName = kr.KhObjectType == KhObjectTypeEnum.Contract ? ko.ContractName : ko.ContractNameList,
//                  ko.KhScore,
//                  ko.IsExempt,
//                  ko.KhEntityGUID,
//                  ko.TotalUserCount,
//                  ko.FinsihUserCount,
//              }
//          )
//          .ToList();

// //         if (khObjectWideList.Count == 0)
//         {
//             return;
//         }

// //         var providerRecordGUIDList = khObjectWideList
//         //                                 .Where(x => x.ProviderRecordGUID.HasValue)
//         //                                 .Select(x => x.ProviderRecordGUID.Value)
//         //                                 .Distinct()
//         //                                 .ToList();

//         // 定级信息
// //         var gradePlanQuery = scope.AsQueryable<PGGradePlan>().Where(x => x.Status == ApproveStateEnum.Approved);
//            var grade2ProviderQuery = scope.AsQueryable<PGGradePlan2ProviderRecord>();
//            var prQuery = scope.AsQueryable<ProviderRecord>().Where(x => providerRecordGUIDList.Contains(x.ProviderRecordGUID));

//            var gradeWideList =
//         (
// //             from g2p in grade2ProviderQuery
//         //     join pr in prQuery on g2p.ProviderRecordGUID equals pr.ProviderRecordGUID
//         //     join gp in gradePlanQuery on g2p.PGGradePlanGUID equals gp.PGGradePlanGUID
//         //  select new
//             {
// //                 gp.EndDate,
//         //         gp.ApproveTime,
//         //         pr.ProviderGUID,
//         //         pr.ProviderTypeGUID,
//         //         pr.BUGUID,
//         //         g2p.ProviderRecordGUID,
//         //         g2p.FinalGradeGUID
//         //  }
//         )
// //         .ToList();

//         // 1. 先按照ProviderGUID+ProviderTypeGUID+ProjGUID+ContractGUID+KhYear+KhType+KhCycle 分组，取ModifiedTime最大的考核对象作为考核得分依据，用于更新 周期汇总 数据
//         // 2. 最后还是将 周期汇总 按照ProviderGUID+ProviderTypeGUID+KhYear 分组，用于更新年度总览数据
//         // 3. 再将 周期汇总 按照ProviderGUID+ProviderTypeGUID+ProjGUID+ContractGUID+KhYear 分组，用于更新 考核明细 数据
// //         foreach (var pList in khObjectWideList
//         //                         .GroupBy(x => new
//         //                      {
// //                                     x.ProviderGUID,
//         //                             x.ProviderTypeGUID,
//         //                             x.ProjGUID,
//         //                             x.ContractGUID,
//         //                             x.KhYear,
//         //                             x.KhType,
//         //                             x.KhCycle
//         //                         }))
//         {
// //             var key = pList.Key;

//         //     KhAnalysisPeriod period = allPeriodList.Find(x => x.AnalysisType == KhAnalysisTypeEnum.PeriodStat
//         //                                                    && x.ProviderGUID == key.ProviderGUID
//         //                                                    && x.ProviderTypeGUID == key.ProviderTypeGUID
//         //                                                    && x.KhYear == key.KhYear
//         //                                                    && x.ProjGUID == key.ProjGUID
//         //                                                    && x.ContractGUID == key.ContractGUID
//         //                                                    && x.KhType == key.KhType
//         //                                                    && x.KhCycle == key.KhCycle);
//         //     if (period is null)
//         //  {
// //                 period = EntityFactory.New<KhAnalysisPeriod>();
//         //         period.EntityState = EntityState.Created;
//         //         period.AnalysisType = KhAnalysisTypeEnum.PeriodStat;
//         //         period.ProviderGUID = key.ProviderGUID;
//         //         period.ProviderTypeGUID = key.ProviderTypeGUID;
//         //         period.KhYear = key.KhYear;
//         //         period.ProjGUID = key.ProjGUID;
//         //         period.ContractGUID = key.ContractGUID;
//         //         period.KhType = key.KhType;
//         //         period.KhCycle = key.KhCycle;
//         //         allPeriodList.Add(period);
//         //  }

//             // 所有考核人数
// //             period.TotalUserCount = pList.Sum(x => x.TotalUserCount.GetValueOrDefault());
//         //     period.FinishUserCount = pList.Sum(x => x.FinsihUserCount.GetValueOrDefault());

//         //  // 最新的一条记录
// //             var latestItem = pList.OrderByDescending(x => x.ModifiedTime).FirstOrDefault();
//         //     period.KhScore = latestItem.KhScore;
//         //     period.IsExempt = latestItem.IsExempt;

//         //     period.KhEntityGUID = latestItem.KhEntityGUID;

//         //     if (latestItem.KhObjectType == KhObjectTypeEnum.Provider)
//         //  {
// //                 period.ContractName = string.Join(",", pList.SelectMany(x => Utils.ConvertToList<Guid>(x.ContractName)).Distinct());
//         //  }
// //             else if (latestItem.KhObjectType == KhObjectTypeEnum.Contract)
//         //  {
// //                 period.ContractName = latestItem.ContractName;
//         //  }

//             // 更新考核等级信息
// //             if (period.IsExempt == CommonYNEnum.No && period.KhScore.HasValue)
//         //  {
// //                 period.KhGradeGUID = GetProviderGradeByScore(gradeList, period.KhScore.Value)?.ProviderGradeGUID;
//         //  }

//             // 更新定级信息
// //             var cycleRange = GetKhCycleRangeDate(latestItem.KhType, latestItem.KhCycle);
//         //     var djGrade = gradeWideList.Where(x => x.ProviderRecordGUID == latestItem.ProviderRecordGUID)
//         //                                .Where(x => cycleRange.Item1 <= x.EndDate && x.EndDate <= cycleRange.Item2)
//         //                                .OrderByDescending(x => x.EndDate)
//         //                                .ThenByDescending(x => x.ApproveTime)
//         //                                .FirstOrDefault();
//         //     period.ProviderGradeGUID = djGrade?.FinalGradeGUID;
//         }

//         // 2.
//         foreach (var pList in allPeriodList
//                                 .Where(x => x.AnalysisType == KhAnalysisTypeEnum.PeriodStat)
//                                 .GroupBy(x => new { x.ProviderGUID, x.ProviderTypeGUID, x.KhYear }))
//         {
//             var key = pList.Key;


//             KhAnalysisPeriod annual = allPeriodList.Find(x => x.AnalysisType == KhAnalysisTypeEnum.AnnualOverview
//                                                            && x.ProviderGUID == key.ProviderGUID
//                                                            && x.ProviderTypeGUID == key.ProviderTypeGUID
//                                                            && x.KhYear == key.KhYear);
//             if (annual is null)
//             {
//                 annual = EntityFactory.New<KhAnalysisPeriod>();
//                 annual.EntityState = EntityState.Created;
//                 annual.AnalysisType = KhAnalysisTypeEnum.AnnualOverview;
//                 annual.ProviderGUID = key.ProviderGUID;
//                 annual.ProviderTypeGUID = key.ProviderTypeGUID;
//                 annual.KhYear = key.KhYear;
//                 allPeriodList.Add(annual);
//             }
//             // 更新完成率信息
//             annual.ProjGUIDList = string.Join(",", pList.Select(x => x.ProjGUID).Distinct());
//             annual.ContractNameList = string.Join(",", pList.SelectMany(x => Utils.ConvertToList<string>(x.ContractName)).Distinct());
//             annual.TotalUserCount = pList.Sum(x => x.TotalUserCount);
//             annual.FinishUserCount = pList.Sum(x => x.FinishUserCount);

//             // 同一周期不同项目+合同合并，已提交且不为免考则作为得分的分子分母，都免考则免考，否则为未提交
//             var groupList =
//                 pList.GroupBy(x => new { x.KhType, x.KhCycle })
//                      .Select(gList =>
//                      {
//                          var gKey = gList.Key;
//                          List<decimal> scores = new List<decimal>();
//                          foreach (var gItem in gList.Where(x => x.IsExempt == CommonYNEnum.No && x.KhScore.HasValue))
//                          {
//                              scores.Add(gItem.KhScore.Value);
//                          }
//                          decimal? gkhScore = null;
//                          if (scores.Count > 0)
//                          {
//                              gkhScore = scores.Average();
//                          }

//                          var gIsExempt = gkhScore is null && gList.All(x => x.IsExempt == CommonYNEnum.Yes)
//                                                 ? CommonYNEnum.Yes
//                                                 : CommonYNEnum.No;
//                          return new
//                          {
//                              KhType = gKey.KhType,
//                              KhCycle = gKey.KhCycle,
//                              KhScore = gkhScore,
//                              IsExempt = gIsExempt,
//                          };
//                      })
//                      .ToList();


//             // 年季月 是否免考+每个区间的得分
//             // null代表没结果1  null代表没结果!  null代表没结果!
//             Dictionary<int, List<(int?, decimal?)?>> scoresMap = new Dictionary<int, List<(int?, decimal?)?>>()
//                     {
//                         { KhTypeEnum.YearKh,    Enumerable.Repeat<(int?, decimal?)?>(null, 1).ToList() },
//                         { KhTypeEnum.QuarterKh, Enumerable.Repeat<(int?, decimal?)?>(null, 4).ToList() },
//                         { KhTypeEnum.MonthKh,   Enumerable.Repeat<(int?, decimal?)?>(null, 12).ToList() }
//                     };

//             // 年季月的汇总 免考与得分
//             Dictionary<int, (int?, decimal?)?> typeScores = new Dictionary<int, (int?, decimal?)?>()
//                     {
//                         { KhTypeEnum.YearKh, null },
//                         { KhTypeEnum.QuarterKh, null },
//                         { KhTypeEnum.MonthKh, null },
//                     };

//             // 匹配 年季月的免考与分数
//             foreach (var t in scoresMap)
//             {
//                 int khType = t.Key;
//                 List<int?> isExempts = new List<int?>();
//                 List<decimal> scores = new List<decimal>();
//                 foreach (var item in groupList.Where(x => x.KhType == khType))
//                 {
//                     int? index = GetKhCycleIndex(khType, item.KhCycle);
//                     if (index.HasValue)
//                     {
//                         scoresMap[khType][index.Value] = (item.IsExempt, item.KhScore);
//                         isExempts.Add(item.IsExempt);
//                         // 必须有不是免考，且已经提交的分数才算分数
//                         if (item.IsExempt == CommonYNEnum.No && item.KhScore.HasValue)
//                         {
//                             scores.Add(item.KhScore.Value);
//                         }
//                     }
//                 }
//                 // 有免考信息则代表考核类型的值
//                 if (isExempts.Count > 0)
//                 {
//                     // 有一个不是免考则不算免考
//                     int? isExempt = isExempts.Any(x => x == CommonYNEnum.No) ? CommonYNEnum.No : CommonYNEnum.Yes;
//                     // 必须有不是免考，且已经提交的分数才算分数
//                     decimal? score = null;
//                     if (scores.Count > 0)
//                     {
//                         score = scores.Average();
//                     }

//                     typeScores[khType] = (isExempt, score);
//                 }
//             }

//             // 考核得分
//             decimal? khScore = null;
//             // 整体免考情况：如果年季月的考核情况有值，并且值都是免考，则整体免考
//             int khIsExempt = typeScores.Any(x => x.Value.HasValue) && typeScores.Where(x => x.Value.HasValue).All(x => x.Value.Value.Item1 == CommonYNEnum.Yes)
//                                 ? CommonYNEnum.Yes
//                                 : CommonYNEnum.No;
//             // 有效权重
//             decimal? validWeight = null;
//             // 权重分之和
//             decimal? sumWeightScore = 0;
//             // 需要根据类别去找规则，从而知道考核类型权重
//             Guid providerTypeGUID = key.ProviderTypeGUID.GetValueOrDefault();

//             foreach (var t in typeScores)
//             {
//                 if (t.Value == null || !t.Value.Value.Item2.HasValue)
//                 {
//                     continue;
//                 }

//                 if (khWeightMap.ContainsKey(providerTypeGUID) && khWeightMap[providerTypeGUID].ContainsKey(t.Key))
//                 {
//                     decimal weight = khWeightMap[providerTypeGUID][t.Key];
//                     sumWeightScore += t.Value.Value.Item2.Value * weight;
//                     validWeight = validWeight.GetValueOrDefault() + weight;
//                 }
//             }
//             // 计算考核类型权重均分
//             if (validWeight.HasValue)
//             {
//                 khScore = validWeight.Value > 0 ? sumWeightScore / validWeight.Value : 0;
//             }

//             annual.KhScore = khScore;
//             annual.IsExempt = khIsExempt;

//             // 考核结果
//             if (khIsExempt == CommonYNEnum.No && khScore.HasValue)
//             {
//                 annual.KhGradeGUID = GetProviderGradeByScore(gradeList, khScore.Value)?.ProviderGradeGUID;
//             }

//             // 更新定级信息
//             // 更新定级信息，取的是今年度的最新定级结果
//             var cycleRange = (new DateTime(key.KhYear.GetValueOrDefault(), 1, 1),
//                               new DateTime(key.KhYear.GetValueOrDefault(), 12, 31).AddDays(1).AddMilliseconds(-1));
//             var djGrade = gradeWideList.Where(x => x.ProviderGUID == annual.ProviderGUID && x.ProviderTypeGUID == annual.ProviderTypeGUID)
//                                        .Where(x => cycleRange.Item1 <= x.EndDate && x.EndDate <= cycleRange.Item2)
//                                        .OrderByDescending(x => x.EndDate)
//                                        .ThenByDescending(x => x.ApproveTime)
//                                        .FirstOrDefault();
//             annual.ProviderGradeGUID = djGrade?.FinalGradeGUID;
//         }

//         // 3. 
//         foreach (var pList in allPeriodList
//                                 .Where(x => x.AnalysisType == KhAnalysisTypeEnum.PeriodStat)
//                                 .GroupBy(x => new { x.ProviderGUID, x.ProviderTypeGUID, x.ProjGUID, x.ContractGUID, x.KhYear }))
//         {
//             var key = pList.Key;

//             KhAnalysisPeriod detail = allPeriodList.Find(x => x.AnalysisType == KhAnalysisTypeEnum.KhDetail
//                                                            && x.ProviderGUID == key.ProviderGUID
//                                                            && x.ProviderTypeGUID == key.ProviderTypeGUID
//                                                            && x.KhYear == key.KhYear
//                                                            && x.ProjGUID == key.ProjGUID
//                                                            && x.ContractGUID == key.ContractGUID);
//             if (detail is null)
//             {
//                 detail = EntityFactory.New<KhAnalysisPeriod>();
//                 detail.EntityState = EntityState.Created;
//                 detail.AnalysisType = KhAnalysisTypeEnum.KhDetail;
//                 detail.KhAnalysisPeriodGUID = Guid.NewGuid();
//                 detail.ProviderGUID = key.ProviderGUID;
//                 detail.ProviderTypeGUID = key.ProviderTypeGUID;
//                 detail.KhYear = key.KhYear;
//                 detail.ProjGUID = key.ProjGUID;
//                 detail.ContractGUID = key.ContractGUID;
//                 allPeriodList.Add(detail);
//             }

//             // 回填Period的KhDetailGUID
//             foreach (KhAnalysisPeriod p in pList)
//             {
//                 if (p.KhDetailGUID is null)
//                 {
//                     p.KhDetailGUID = detail.KhAnalysisPeriodGUID;
//                 }
//             }

//             // 合并去重取合同名称
//             detail.ContractName = string.Join(",", pList.SelectMany(x => Utils.ConvertToList<string>(x.ContractName)).Distinct());

//             // 年季月 是否免考+每个区间的得分
//             // null代表没结果1  null代表没结果!  null代表没结果!
//             Dictionary<int, List<(int?, decimal?)?>> scoresMap = new Dictionary<int, List<(int?, decimal?)?>>()
//                     {
//                         { KhTypeEnum.YearKh,    Enumerable.Repeat<(int?, decimal?)?>(null, 1).ToList() },
//                         { KhTypeEnum.QuarterKh, Enumerable.Repeat<(int?, decimal?)?>(null, 4).ToList() },
//                         { KhTypeEnum.MonthKh,   Enumerable.Repeat<(int?, decimal?)?>(null, 12).ToList() }
//                     };

//             // 年季月的汇总 免考与得分
//             Dictionary<int, (int?, decimal?)?> typeScores = new Dictionary<int, (int?, decimal?)?>()
//                     {
//                         { KhTypeEnum.YearKh, null },
//                         { KhTypeEnum.QuarterKh, null },
//                         { KhTypeEnum.MonthKh, null },
//                     };

//             // 匹配 年季月的免考与分数
//             foreach (var t in scoresMap)
//             {
//                 int khType = t.Key;
//                 List<int?> isExempts = new List<int?>();
//                 List<decimal> scores = new List<decimal>();
//                 foreach (var item in pList.Where(x => x.KhType == khType))
//                 {
//                     int? index = GetKhCycleIndex(khType, item.KhCycle);
//                     if (index.HasValue)
//                     {
//                         scoresMap[khType][index.Value] = (item.IsExempt, item.KhScore);
//                         isExempts.Add(item.IsExempt);
//                         // 必须有不是免考，且已经提交的分数才算分数
//                         if (item.IsExempt == CommonYNEnum.No && item.KhScore.HasValue)
//                         {
//                             scores.Add(item.KhScore.Value);
//                         }
//                     }
//                 }
//                 // 有免考信息则代表考核类型的值
//                 if (isExempts.Count > 0)
//                 {
//                     // 有一个不是免考则不算免考
//                     int? isExempt = isExempts.Any(x => x == CommonYNEnum.No) ? CommonYNEnum.No : CommonYNEnum.Yes;
//                     // 必须有不是免考，且已经提交的分数才算分数
//                     decimal? score = null;
//                     if (scores.Count > 0)
//                     {
//                         score = scores.Average();
//                     }

//                     typeScores[khType] = (isExempt, score);
//                 }
//             }

//             // 考核得分
//             decimal? khScore = null;
//             // 整体免考情况：如果年季月的考核情况有值，并且值都是免考，则整体免考
//             int khIsExempt = typeScores.Any(x => x.Value.HasValue) && typeScores.Where(x => x.Value.HasValue).All(x => x.Value.Value.Item1 == CommonYNEnum.Yes)
//                                 ? CommonYNEnum.Yes
//                                 : CommonYNEnum.No;
//             // 有效权重
//             decimal? validWeight = null;
//             // 权重分之和
//             decimal? sumWeightScore = 0;
//             // 需要根据类别去找规则，从而知道考核类型权重
//             Guid providerTypeGUID = key.ProviderTypeGUID.GetValueOrDefault();

//             foreach (var t in typeScores)
//             {
//                 if (t.Value == null || !t.Value.Value.Item2.HasValue)
//                 {
//                     continue;
//                 }

//                 if (khWeightMap.ContainsKey(providerTypeGUID) && khWeightMap[providerTypeGUID].ContainsKey(t.Key))
//                 {
//                     decimal weight = khWeightMap[providerTypeGUID][t.Key];
//                     sumWeightScore += t.Value.Value.Item2.Value * weight;
//                     validWeight = validWeight.GetValueOrDefault() + weight;
//                 }
//             }
//             // 计算考核类型权重均分
//             if (validWeight.HasValue)
//             {
//                 khScore = validWeight.Value > 0 ? sumWeightScore / validWeight.Value : 0;
//             }

//             detail.KhScore = khScore;
//             detail.IsExempt = khIsExempt;

//             // 考核结果
//             if (khIsExempt == CommonYNEnum.No && khScore.HasValue)
//             {
//                 detail.KhGradeGUID = GetProviderGradeByScore(gradeList, khScore.Value)?.ProviderGradeGUID;
//             }

//             // 更新定级信息，取的是今年度的最新定级结果
//             var cycleRange = (new DateTime(key.KhYear.GetValueOrDefault(), 1, 1),
//                               new DateTime(key.KhYear.GetValueOrDefault(), 12, 31).AddDays(1).AddMilliseconds(-1));
//             var djGrade = gradeWideList.Where(x => x.ProviderGUID == detail.ProviderGUID && x.ProviderTypeGUID == detail.ProviderTypeGUID)
//                                        .Where(x => cycleRange.Item1 <= x.EndDate && x.EndDate <= cycleRange.Item2)
//                                        .OrderByDescending(x => x.EndDate)
//                                        .ThenByDescending(x => x.ApproveTime)
//                                        .FirstOrDefault();
//             detail.ProviderGradeGUID = djGrade?.FinalGradeGUID;
//         }

//         if (allPeriodList.Any())
//         {
//             _khAnalysisPeriodES.Instance.SaveChanges(allPeriodList);
//             scope.Commit();
//         }
//     }
// // }
