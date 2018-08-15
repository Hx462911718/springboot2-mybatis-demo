package com.winterchen.controller;

import com.github.pagehelper.PageHelper;
import com.winterchen.common.ServerResponse;
import com.winterchen.model.UserDomain;
import com.winterchen.service.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2017/8/16.
 */
@Api(value = "用户模块")
@Controller
@RequestMapping(value = "/user/")
public class UserController {

    @Autowired
    private UserService UserService;

    @RequestMapping({"","/"})
    public String test(){
        return "index2";
    }


    @ApiOperation(value = "新增用户",notes = "添加一个新用户")
    @ApiImplicitParam(name = "user",value = "用户数据",required = true,paramType = "body",dataType = "UserDomain")
    @ResponseBody
    @PostMapping("/add")
    public ServerResponse addUser(UserDomain user){
        return UserService.addUser(user);
    }
    @ApiOperation(value = "查询所有用户",notes = "分页查询所有用户")
    @ResponseBody
    @GetMapping("/all")
    public Object findAllUser(
            @RequestParam(name = "pageNum", required = false, defaultValue = "1")
                    int pageNum,
            @RequestParam(name = "pageSize", required = false, defaultValue = "2")
                    int pageSize){
        return UserService.findAllUser(pageNum,pageSize);
    }
}
