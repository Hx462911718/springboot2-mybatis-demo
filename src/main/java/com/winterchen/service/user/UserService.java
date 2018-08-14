package com.winterchen.service.user;

import com.github.pagehelper.PageInfo;
import com.winterchen.common.ServerResponse;
import com.winterchen.model.UserDomain;
import io.swagger.models.auth.In;

import java.util.List;

/**
 * Created by Administrator on 2018/4/19.
 */
public interface UserService {

    ServerResponse addUser(UserDomain user);

    PageInfo<UserDomain> findAllUser(int pageNum, int pageSize);

    ServerResponse<UserDomain> findUserById (Integer userId);
}
