package com.winterchen.common;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;

/**
 * @author hexin
 * @createDate 2018年06月19日 11:30:00
 */
public class ServerResponse<T> implements Serializable {


    private Integer code;
    private String Msg;
    private T data;

    public ServerResponse() {
    }

    public Integer getCode() {
        return code;
    }

    @JsonIgnore
    //使之不在json序列化结果当中
    public boolean isSuccess(){
        return this.code == ResponseCode.SUCCESS.getCode();
    }


    public String getMsg() {
        return Msg;
    }

    public void setMsg(String msg) {
        Msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
    //code构造器
    public ServerResponse(Integer code) {
        this.code = code;
    }

    //code 和 msg

    public ServerResponse(Integer code, String msg) {
        this.code = code;
        Msg = msg;
    }
    //code data

    public ServerResponse(Integer code, T data) {
        this.code = code;
        this.data = data;
    }
    //code msg data

    public ServerResponse(Integer code, String msg, T data) {
        this.code = code;
        Msg = msg;
        this.data = data;
    }

    /**
     * code 成功
     * @param <T>
     * @return
     */
    public static <T> ServerResponse<T> createBySuccess(){
        return new ServerResponse<T>(ResponseCode.SUCCESS.getCode());
    }

    public static <T> ServerResponse<T> createBySuccessMessage(String msg){
        return new ServerResponse<T>(ResponseCode.SUCCESS.getCode() , msg);
    }

    public static <T> ServerResponse<T> createBySuccess(T data){
        return new ServerResponse<T>(ResponseCode.SUCCESS.getCode() , data);
    }

    public static <T> ServerResponse<T> createBySuccess(String msg , T data){
        return new ServerResponse<T>(ResponseCode.SUCCESS.getCode() , msg , data);
    }

    /**
     * 失败 默认描述
     * @param <T>
     * @return
     */
    public static <T> ServerResponse<T> createByError(){
        return new ServerResponse<T>(ResponseCode.ERROR.getCode() , ResponseCode.ERROR.getDesc());
    }

    public static <T> ServerResponse<T> createByErrorMessage(String errorMessage){
        return new ServerResponse<T>(ResponseCode.ERROR.getCode() , errorMessage);
    }

    public static <T> ServerResponse<T> createByErrorCodeMessage(int errorCode , String errorMessage){
        return new ServerResponse<>(errorCode , errorMessage);
    }
}
