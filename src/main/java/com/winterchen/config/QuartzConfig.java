package com.winterchen.config;

import com.winterchen.task.TestTask;
import org.quartz.Trigger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.quartz.CronTriggerFactoryBean;
import org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;


/**
 * @author hexin
 * @createDate 2018年08月14日 14:31:00
 */
@Configuration
public class QuartzConfig {
    @Autowired
    private SchedulerConfig schedulerConfig;

    @Bean(name = "jobDetail")
    public MethodInvokingJobDetailFactoryBean detailFactoryBean(TestTask task){

        //TestTask为需要执行的任务
        //此工厂主要用来制作一个jobDetail，即制作一个任务。由于我们所做的定时任务根本上讲其实就是执行一个方法。所以用这个工厂比较方便。
        MethodInvokingJobDetailFactoryBean jobDetail = new MethodInvokingJobDetailFactoryBean();

         /*
         *  是否并发执行
         *  例如每5s执行一次任务，但是当前任务还没有执行完，就已经过了5s了，
         *  如果此处为true，则下一个任务会bing执行，如果此处为false，则下一个任务会等待上一个任务执行完后，再开始执行
         */
        jobDetail.setConcurrent(schedulerConfig.isConcurrent());

        //设置任务的名字
        jobDetail.setName(schedulerConfig.getName());
        //任务分组
        jobDetail.setGroup(schedulerConfig.getGroup());

        /*
         * 这两行代码表示执行task对象中的scheduleTest方法。定时执行的逻辑都在scheduleTest。
         */
        jobDetail.setTargetObject(task);

        jobDetail.setTargetMethod("testQuartz");

        return  jobDetail;
    }

    //触发器
    @Bean(name = "jobTrigger")
    public  CronTriggerFactoryBean cronJobTrigger(MethodInvokingJobDetailFactoryBean jobDetail){
        CronTriggerFactoryBean trigger = new CronTriggerFactoryBean();
        trigger.setJobDetail(jobDetail.getObject());
        trigger.setCronExpression(schedulerConfig.getCronExpression());
        trigger.setName("testTrigger");
        return  trigger;
    }

    //调度器
    @Bean(name = "scheduler")
    public  SchedulerFactoryBean schedulerFactory(Trigger cronJobTrigger){
        SchedulerFactoryBean scheduler = new SchedulerFactoryBean();
        //设置是否任意一个已定义的Job会覆盖现在的Job。默认为false，即已定义的Job不会覆盖现有的Job。
        scheduler.setOverwriteExistingJobs(true);
        // 延时启动，应用启动5秒后  ，定时器才开始启动
        scheduler.setStartupDelay(5);
        //注册定时触发器
        scheduler.setTriggers(cronJobTrigger);
        return  scheduler;
    }
    //多任务时的Scheduler，动态设置Trigger。一个SchedulerFactoryBean可能会有多个Trigger
    @Bean(name = "multitaskScheduler")
    public SchedulerFactoryBean schedulerFactoryBean(){
        SchedulerFactoryBean schedulerFactoryBean = new SchedulerFactoryBean();
        return schedulerFactoryBean;
    }

}
