package com.winterchen.task;

import com.winterchen.service.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import com.winterchen.model.UserDomain;

/**
 * @author hexin
 * @createDate 2018年08月14日 17:23:00
 */
@Component
public class TaskSpringSchedlue {
    @Autowired
    private UserService userService;

//    @Scheduled(cron = "0 0/1 * * * ?")
//    public void insertUser(){
//        UserDomain user = new UserDomain();
//        userService.addUser(user);
//    }
}
