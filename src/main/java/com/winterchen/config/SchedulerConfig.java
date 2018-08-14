package com.winterchen.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author hexin
 * @createDate 2018年08月14日 15:01:00
 */
@Component
@ConfigurationProperties(prefix = "scheduler")
public class SchedulerConfig {

    private  String name;
    private  String group;
    private  boolean concurrent;
    private  String cronExpression;

    public void setName(String name) {
        this.name = name;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public void setConcurrent(boolean concurrent) {
        this.concurrent = concurrent;
    }

    public void setCronExpression(String cronExpression) {
        this.cronExpression = cronExpression;
    }

    public String getName() {
        return name;
    }

    public String getGroup() {
        return group;
    }

    public boolean isConcurrent() {
        return concurrent;
    }

    public String getCronExpression() {
        return cronExpression;
    }
}
