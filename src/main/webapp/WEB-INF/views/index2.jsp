<%--
  Created by IntelliJ IDEA.
  User: hexin
  Date: 2018/8/15
  Time: 10:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="basePath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>告警督办</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="${basePath}/css/style.css" rel="stylesheet" type="text/css" />
    <link href="${basePath}/css/zTreeStyle/zTreeStyle.css" rel="stylesheet" type="text/css" />
    <script src="${basePath}/js/jquery-1.8.0.min.js" type="text/javascript"></script>
    <script src="${basePath}/js/common.js" type="text/javascript"></script>
    <script src="${basePath}/js/jquery.modal.js" type="text/javascript"></script><!--打开弹出框-->
    <script src="${basePath}/js/jquery.draggable.js" type="text/javascript"></script>
    <script src="${basePath}/js/js.openWindow.js" type="text/javascript"></script><!--打开系统新窗口-->
    <script src="${basePath}/js/jquery.nicescroll.min.js" type="text/javascript"></script><!--美化滚动条-->
    <script src="${basePath}/js/jquery.ztree.core.min.js" type="text/javascript"></script><!--zTree树控件-->
    <script src="${basePath}/js/jquery.ztree.excheck.min.js" type="text/javascript"></script><!--zTree树控件-->
    <script type="text/javascript">
        var setting = {
            check: {
                enable: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            }
        };
        var zNodes =[
            { id:1, pId:0, name:"父节点1 - 展开", open:true},
            { id:11, pId:1, name:"父节点11 - 折叠"},
            { id:111, pId:11, name:"叶子节点111叶子节点111叶子节点111叶子节点111叶子节点111"},
            { id:112, pId:11, name:"叶子节点112"},
            { id:113, pId:11, name:"叶子节点113"},
            { id:114, pId:11, name:"叶子节点114"},
            { id:12, pId:1, name:"父节点12 - 折叠"},
            { id:121, pId:12, name:"叶子节点121"},
            { id:122, pId:12, name:"叶子节点122"},
            { id:123, pId:12, name:"叶子节点123"},
            { id:124, pId:12, name:"叶子节点124"},
            { id:2, pId:0, name:"父节点2 - 折叠"},
            { id:21, pId:2, name:"父节点21 - 展开", open:true},
            { id:211, pId:21, name:"叶子节点211"},
            { id:212, pId:21, name:"叶子节点212"},
            { id:213, pId:21, name:"叶子节点213"},
            { id:214, pId:21, name:"叶子节点214"},
            { id:22, pId:2, name:"父节点22 - 折叠"},
            { id:221, pId:22, name:"叶子节点221"},
            { id:222, pId:22, name:"叶子节点222"},
            { id:223, pId:22, name:"叶子节点223"},
            { id:224, pId:22, name:"叶子节点224"},
            { id:23, pId:2, name:"父节点23 - 折叠"},
            { id:231, pId:23, name:"叶子节点231"},
            { id:232, pId:23, name:"叶子节点232"},
            { id:233, pId:23, name:"叶子节点233"},
            { id:234, pId:23, name:"叶子节点234"},
        ];
        $(document).ready(function(){
            for(var i=0;i<=3;i++){
                $.fn.zTree.init($("#Ztree"+i), setting, zNodes);
            }
        });
    </script>
</head>
<body class="bg-gray">
<div class="cell">
    <div class="breadcrumb clearfix">
        <span class="fl breadcrumb-name"><i class="icon icon-breadcrumb"></i>告警督办</span>
        <div class="fr tree-box">
            <label class="tree-box-info">越秀区</label>
            <div class="tree-con">
                <div class="tree-top">当前辖区：<a class="zz">石岐区</a> <a class="close">×</a><a class="refresh"></a></div>
                <div class="h200 nicescroll-v">
                    <ul class="ztree" id="Ztree2"></ul>
                </div>
            </div>
        </div>
    </div>
    <div class="form-inline">
        <div class="form-group"><label>督办编号：</label><input type="text" class="form-control"/></div>
        <div class="form-group"><label>管井地址：</label><input type="text" class="form-control"/></div>
        <div class="form-group"><label>当前督办环节：</label><select class="form-control"><option>全部</option><option>超时督办</option><option>网格员确认</option><option>责任单位处理</option><option>督办结束</option></select></div>
        <a class="btn btn-blue"><i class="icon icon-search"></i>搜索</a>
        <a class="icon icon-btn-reset ml5" title="刷新"></a>
    </div>
    <%--<form id="" action="" method="">--%>
        <%--<div style="clear:both;" class="form-inline">--%>
            <%--<label>督办编号:<input type="text" name="address" /></label>--%>
            <%--<label>管井编码:<input type="text" name="code" /></label>--%>
            <%--<ul class="search-c">--%>
                <%--<li>--%>
                    <%--<label>任务来源:--%>
                        <%--<mytags:select htmlClass="loginfrom2" name="sources" code="checktask_source" />--%>
                    <%--</label>--%>
                <%--</li>--%>
            <%--</ul>--%>
            <%--<a onclick="clearForm('undoTaskDoorListForm')" class="fr mt5">--%>
                <%--<img src="${cssPath }/images/refresh.png" class="vn" />--%>
            <%--</a>--%>
            <%--<a id="searchDoorList" class="btn btn-blue mr5 fr">--%>
                <%--<i class="icon icon_search"></i>搜索</a>--%>
        <%--</div>--%>
    <%--</form>--%>

        <div class="row mt5">
        <table class="table">
            <thead>
            <tr>
                <th>序号</th>
                <th>督办编号</th>
                <th>管井地址</th>
                <th>告警原因</th>
                <th>告警时间</th>
                <th>责任单位</th>
                <th>处理时长</th>
                <th>当前督办环节</th>
                <th>督办人</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue mr5" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-do-duban">督办</a>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>8</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>9</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            <tr>
                <td>10</td>
                <td>460273849472829</td>
                <td><span class="w120 inlineblock ell tl">广州电信天河路管井盖</span></td>
                <td>井盖打开</td>
                <td>3-19 15:15</td>
                <td>中国电信</td>
                <td>1小时</td>
                <td>网格员确认</td>
                <td>张夏三</td>
                <td class="operate">
                    <a class="color-blue mr5" onclick="javascript:openwindow('查看管井详情.html',1300,560)">查看</a>
                    <a class="color-blue" data-toggle="modal" href="#Modal-check-chuzhi">查看处置</a>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="paging clearfix">
            <p class="fl">
                <a class="btn-first active">首页</a>
                <a class="btn-prev">上一页</a>
                <a class="">1</a>
                <a class="">2</a>
                <a class="btn-next">下一页</a>
                <a class="btn-end">末页</a>
            </p>
            <p class="fr color-black mt8">总记录数：<span>100</span>页/每页10条</p>
        </div>
    </div>
</div>
<!--督办-->
<div  class="modal fade in hide" id="Modal-do-duban">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"></button>
        <h4>黄埔大道西89号管井井盖打开告警</h4>
    </div>
    <div class="modal-body">
        <div class="bg-blue-dash">
            <div class="box-flow">
                <label class="title">流转环节</label>
                <div class="cell flows">
                    <ul class="thing-flows">
                        <li class="flows-has pct28">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">超时督办</span><span class="line cell"></span></p>
                                    <p class="time">2018-01-01 12:12:12</p>
                                </div>
                            </div>
                        </li>
                        <li class="flows-ing pct28">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">网格员确认</span><span class="line cell"></span></p>
                                    <p class="time">2018-01-01 12:12:12</p>
                                </div>
                            </div>
                        </li>
                        <li class="flows-will pct28">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">责任单位处理</span><span class="line cell"></span></p>
                                    <p class="time">未完成</p>
                                </div>
                            </div>
                        </li>
                        <li class="flows-will pct16">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">督办结束</span></p>
                                    <p class="time">未完成</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="p15">
            <div class="mb20">
                <div class="mb10 fb"><i class="icon icon-breadcrumb"></i>基本信息</div>
                <div class="clearfix">
                    <div class="box-map fl mr15">
                        <img src="images/demo-map.png" class="demo-map" width="278" height="162"/>
                        <p class="thing-meng"><span class="address" title="黄埔大道西89号香江家居香江家居香江家居香江家居香江家居香江家居">黄埔大道西89号香江家居香江家居香江家居香江家居香江家居香江家居</span></p>
                    </div>
                    <div class="cell">
                        <table class="table-form">
                            <tbody>
                            <tr>
                                <th>告警来源</th>
                                <td>智能设备</td>
                                <th>告警原因</th>
                                <td>井盖打开</td>
                            </tr>
                            <tr>
                                <th>所属网格</th>
                                <td>金城社区010网格</td>
                                <th>告警时间</th>
                                <td>2018-01-01 12:12:12</td>
                            </tr>
                            <tr>
                                <th>管井编号</th>
                                <td>460273849472829</td>
                                <th>管井名称</th>
                                <td>广州电信天河区井盖</td>
                            </tr>
                            <tr>
                                <th>管井地址</th>
                                <td colspan="3">广州市天河区黄埔大道西89号（ 113.344719 , 23.140351）</td>
                            </tr>
                            <tr>
                                <th>告警描述</th>
                                <td colspan="3">
                                    <p class="lh26">黄埔大道西89号管井井盖打开告警</p>
                                    <div class="mt5">
                                        <a class="demo-img"><img src="images/sicon-b1.png"/></a>
                                        <a class="demo-img"><img src="images/sicon-b2.png"/></a>
                                        <a class="demo-img"><img src="images/sicon-b3.png"/></a>
                                        <a class="demo-img"><img src="images/sicon-b1.png"/></a>
                                        <a class="demo-img"><img src="images/sicon-b2.png"/></a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="mb10 fb"><i class="icon icon-breadcrumb"></i>督办处置</div>
                <div class="manage-do">
                    <table class="table-sm">
                        <tbody>
                        <tr class="dashed">
                            <td width="70px" valign="top">告警确认：</td>
                            <td>
                                <label class="mr10"><input type="radio" name="aaa" class="input-radio"/>误报告警</label>
                                <label><input type="radio" name="aaa" class="input-radio"/>确认告警</label>
                            </td>
                        </tr>
                        <tr>
                            <td width="70px" valign="top">处理意见：</td>
                            <td>
                                <div class="mb5"><textarea class="pct100" rows="3"></textarea></div>
                                <div class="clearfix">
                                    <a class="btn-file fl mr10"><input type="file"></a>
                                    <a class="demo-img mr10"><img src="images/sicon-b1.png"/></a>
                                    <a class="demo-img mr10"><img src="images/sicon-b2.png"/></a>
                                    <a class="demo-img mr10"><img src="images/sicon-b3.png"/></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <a class="btn btn-blue mr10" data-dismiss="modal">提交</a>
        <a class="btn btn-white" data-dismiss="modal">取消</a>
    </div>
</div>

<!--查看处置-->
<div  class="modal fade in hide" id="Modal-check-chuzhi">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"></button>
        <h4>处置详情</h4>
    </div>
    <div class="modal-body">
        <div class="bg-blue-dash">
            <div class="box-flow">
                <label class="title">流转环节</label>
                <div class="cell flows">
                    <ul class="thing-flows">
                        <li class="flows-has pct40">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">告警</span><span class="line cell"></span></p>
                                    <p class="time">2018-01-01 12:12:12</p>
                                </div>
                            </div>
                        </li>
                        <li class="flows-ing pct40">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">责任单位处理</span><span class="line cell"></span></p>
                                    <p class="time">2018-01-01 12:12:12</p>
                                </div>
                            </div>
                        </li>
                        <li class="flows-will pct20">
                            <div class="flows-main clearfix">
                                <em class="flows-main-item fl"></em>
                                <div class="flows-main-info cell">
                                    <p class="one-hang clearfix"><span class="name fl">处理完成</span></p>
                                    <p class="time">未完成</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="p15">
            <div class="">
                <div class="mb10 fb"><i class="icon icon-breadcrumb"></i>处置结果</div>
                <table class="table-form">
                    <tbody>
                    <tr>
                        <th width="16%">确认结果</th>
                        <td width="34%">完成</td>
                        <th width="16%">确认人</th>
                        <td width="34%">张小山</td>
                    </tr>
                    <tr>
                        <th width="16%">确认时间</th>
                        <td width="34%">2018-02-19 22:00:00</td>
                        <th width="16%"></th>
                        <td width="34%"></td>
                    </tr>
                    <tr>
                        <th width="16%">备注</th>
                        <td colspan="3" width="84%">
                            <p class="lh26">备注备注备注备注备注备注</p>
                            <div class="mt5">
                                <a class="demo-img"><img src="images/sicon-b1.png"/></a>
                                <a class="demo-img"><img src="images/sicon-b2.png"/></a>
                                <a class="demo-img"><img src="images/sicon-b3.png"/></a>
                                <a class="demo-img"><img src="images/sicon-b1.png"/></a>
                                <a class="demo-img"><img src="images/sicon-b2.png"/></a>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>
