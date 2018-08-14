package com.winterchen;

import com.winterchen.common.ServerResponse;
import com.winterchen.model.UserDomain;
import com.winterchen.service.user.UserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author hexin
 * @createDate 2018年06月19日 14:30:00
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTestService {
    @Autowired
    private UserService userService;

    @Test
    public void findOne(){
        ServerResponse<UserDomain> serverResponse = userService.findUserById(1);
        Assert.assertEquals(new String("hexin"),serverResponse.getData().getUserName());
    }
}
