package com.winterchen.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.quartz.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * @author hexin
 * @createDate 2018年08月14日 15:47:00
 */
@Controller
@Slf4j
@Api(value = "quartz测试cotroller类")
@RequestMapping("/quartz/")
public class QuartzController {

    @Resource(name = "jobTrigger")
    private CronTrigger cronTrigger;
    @Resource(name = "scheduler")
    private Scheduler scheduler;

    @ApiOperation(value = "动态改变cron测试方法")
    @RequestMapping(value = "/test",method = RequestMethod.GET)
    @ResponseBody
    public void updateCronExpersion() throws SchedulerException {
        CronTrigger trigger = (CronTrigger) scheduler.getTrigger(cronTrigger.getKey());
        String currentCron = cronTrigger.getCronExpression();
        log.info("当前cron表达式 currentCro:{}",currentCron);

        //设置新的
        CronScheduleBuilder cronScheduleBuilder = CronScheduleBuilder.cronSchedule("0 0/1 * * * ?");
        trigger = TriggerBuilder.newTrigger().withIdentity(cronTrigger.getKey()).withSchedule(cronScheduleBuilder).build();
        scheduler.rescheduleJob(cronTrigger.getKey(),trigger);
        log.info("更新后的cron cron:{}",trigger.getCronExpression());
    }

}
