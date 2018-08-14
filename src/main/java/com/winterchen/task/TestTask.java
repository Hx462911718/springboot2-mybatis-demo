package com.winterchen.task;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

/**
 * @author hexin
 * @createDate 2018年08月14日 14:49:00
 */
@Component
@EnableScheduling
@Configuration
@Slf4j
public class TestTask {
    public  void testQuartz(){
        log.info("测试成功");
    }
}
