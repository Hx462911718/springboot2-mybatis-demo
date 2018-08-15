//用背景色来填充圆环
$(function() {

    //饼图
    if (document.getElementById("mychart20")) {
        var chart = echarts.init(document.getElementById('mychart20'));
        var data1 = [55];
        var data2 = [45];
		var colors=['#393939'];  
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        fontSize:30,
                        color:'#f26600',
                        fontWeight:'bold',
                    },
                }
            }
        }
        var labelBottom = {
            normal : {
                color: 'rgba(13,15,43,.2)',
                label : {
                    show : true,
					position: 'center',
					
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(13,15,43,.2)'
            }
        };
        var option = {
			backgroundColor:'#fff4d1',
            legend: {
                x : '26px',
				y: '70px',  
                align: 'center',
                textStyle: {
                    color: '#2f3b4a',
                    fontSize: 14
                },
				itemGap:0,
                itemWidth:0,
				itemHeight:0,
                data: [{ name: '占比', icon: 'none' }]
            },
            series : [
                {
                    type : 'pie',
                    radius: ['85%', '100%'],
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    itemStyle : labelFromatter,
                    data : [
                        {
                            name:'占比',
                            value:data1[0],
                            itemStyle : {
                                normal : {
                                    color: '#f3a428',
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis: {
                                    labelLine : {
                                        show : false
                                    }
                                }
                            }
                        },
                        {name:'other', value:data2[0], itemStyle : labelBottom}
                    ]
                },
            ]
        };

        chart.setOption(option);
        $(window).on("resize", chart.resize);

    }
});


$(function() {

    //饼图
    if (document.getElementById("mychart22")) {
        var chart = echarts.init(document.getElementById('mychart22'));
        var data1 = [55];
        var data2 = [45];
		var colors=['#393939'];  
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        fontSize:30,
                        color:"#0995aa",
                        fontWeight:"bold",
						x : '26px',
						y: '66px',  
                    }
                }
            }
        }
        var labelBottom = {
            normal : {
                color: 'rgba(13,15,43,.1)',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(13,15,43,.1)'
            }
        };
        var option = {
			backgroundColor:'#e3f7fa',
            legend: {
                x : '26px',
				y: '66px',  
                align: 'center',
                textStyle: {
                    color: '#2f3b4a',
                    fontSize: 14
                },
				itemGap:0,
                itemWidth:0,
				itemHeight:0,
                padding: [0, 0, 0, 0],
                data: [{ name: '占比', icon: 'none' }]
            },
            series : [
                {
                    type : 'pie',
                    radius: ['85%', '100%'],
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    itemStyle : labelFromatter,
					label: {
						normal: {
							position: 'center'
						}
					},
                    data : [
                        {
                            name:'占比',
                            value:data1[0],
                            itemStyle : {
                                normal : {
                                    color: '#00aea8',
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis: {
                                    labelLine : {
                                        show : false
                                    }
                                }
                            }
                        },
                        {name:'other', value:data2[0], itemStyle : labelBottom}
                    ]
                },
            ]
        };

        chart.setOption(option);
        $(window).on("resize", chart.resize);

    }
});

$(function(){
	<!-- a1 -->
    var myChartA1 = echarts.init(document.getElementById('a1'),'macarons');
    var a1 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            x : 'center',
            data:['智能管井','普通管井'],
        },
        calculable : false,
        grid: {
            borderWidth: 0,
            x:0,
            x2:0,
            y: 40,
            y2: 40
        },
        xAxis : [
            {
                type : 'category',
                data : ['越秀区','天河区','荔湾区','海珠区','黄埔区','白云区','番禺区','南沙区','增城区','花都区','从化区'],
                axisTick : false,
                splitLine:false,
				axisLabel :{
					color :'#2f3b4a',
				},
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: '#cedae7',
                        width: 1
                    }
                }
            }
        ],
        yAxis : [
            {
                type: 'value',
                show: true,
                splitLine:true,
				axisLabel :{
					color :'#000',
				},
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: '#cedae7',
                        width: 0
                    }
                }
				
            }
        ],
        series : [
            {
                barCategoryGap:'30%',
                name:'智能管井',
                type:'bar',
                data:[120, 132, 101, 134, 100, 230, 210,120, 132, 101, 134, 90, 230, 210],
                itemStyle: {
					emphasis: {
						barBorderRadius: [4, 4, 4, 4]
					},
                    normal:{
						//柱形图圆角，初始化效果
						barBorderRadius:[4, 4, 4, 4],
                        color:'#5195dc',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                }
            },
            {
                name:'普通管井',
                type:'bar',
                data:[50, 42, 61, 44, 50, 40, 40,50, 52, 91, 44, 50, 40, 40],
                itemStyle: {
					emphasis: {
						barBorderRadius: [4, 4, 4, 4]
					},
                    normal:{
						//柱形图圆角，初始化效果
						barBorderRadius:[4, 4, 4, 4],
                        color:'#f3a428',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                }
            }
        ]

    };
    myChartA1.setOption(a1);
	<!-- a2 -->
    var myChartA2 = echarts.init(document.getElementById('a2'),'macarons');
    var a2 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            x : 'center',
            data:['告警次数(次)','按时处置量(个)'],
        },
        calculable : false,
        grid: {
            borderWidth: 0,
            x:0,
            x2:0,
            y: 40,
            y2: 40
        },
        xAxis : [
            {
                type : 'category',
                data : ['越秀区','天河区','荔湾区','海珠区','黄埔区','白云区','番禺区','南沙区','增城区','花都区','从化区'],
                axisTick : false,
                splitLine:false,
				axisLabel :{
					color :'#2f3b4a',
				},
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: '#cedae7',
                        width: 2
                    }
                }
            }
        ],
        yAxis : [
            {
                type: 'value',
                show: true,
                splitLine:true,
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: '#cedae7',
                        width: 0
                    }
                },
				axisLabel:{
                    show: true,
					textStyle: {
						color: '#fff'
					}
                },
            }
        ],
        series : [
            {
                barCategoryGap:'30%',
                name:'告警次数(次)',
                type:'bar',
                data:[120, 132, 101, 134, 100, 230, 210,120, 132, 101, 134, 90, 230, 210],
                itemStyle: {
					emphasis: {
						barBorderRadius: [4, 4, 4, 4]
					},
                    normal:{
						//柱形图圆角，初始化效果
						barBorderRadius:[4, 4, 4, 4],
                        color:'#5195dc',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                }
            },
            {
                name:'按时处置量(个)',
                type:'bar',
                data:[50, 42, 61, 44, 50, 40, 40,50, 52, 91, 44, 50, 40, 40],
                itemStyle: {
					emphasis: {
						barBorderRadius: [4, 4, 4, 4]
					},
                    normal:{
						//柱形图圆角，初始化效果
						barBorderRadius:[4, 4, 4, 4],
                        color:'#0bc5b8',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                }
            }
        ]

    };
    myChartA2.setOption(a2);
});

//用image来填充圆环
$(function() {

    //饼图
    if (document.getElementById("mychart1")) {

        var chart = echarts.init(document.getElementById('mychart1'));

        var tol = 100,
            data1 = 55,
            color1 = '#f26600',
            color2 = 'rgba(0,0,0,0.2)';
        var option = {
			title:[
				{
					top: '26%',
					right: 'center',
					text: data1 + '%',
					textStyle: {
						color: color1,
						fontSize: 24,
						fontWeight :'bold'
					}
				},
				{
					top: '60%',
					right: 'center',
					text: '占比',
					textStyle: {
						color: '#2f3b4a',
						fontSize: 14,
						fontWeight :'normal'
					}
				},
			],
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: "images/icon-1.png",
                        width: 74,
                        height: 74
                    },
                    left: 'center',
                    top: 'center'
                }]
            },
            series: [{
                name: '',
                type: 'pie',
                //startAngle:45,
                clockWise: false, //顺时加载
                radius: ['85%', '100%'],
                center: ['50%', '50%'],
                data: [{
                    value: data1,
                    name: '',
                    labelLine:{
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f3a428'
                        }
                    },
                    hoverAnimation: false
                }, {
                    value: tol - data1,
                    name: '',
                    label: {
                        normal: {
                            show: false
                        }
                    },

                        itemStyle: {
							normal: {
								color: color2
							},
							emphasis: {
								color: color2
							}
                    	},
                    hoverAnimation: false
                }]
            }]
        };

        chart.setOption(option);
        $(window).on("resize", chart.resize);

    }
});

$(function() {

    //饼图
    if (document.getElementById("mychart2")) {

        var chart = echarts.init(document.getElementById('mychart2'));

        var tol = 100,
            data1 = 75,
            color1 = '#0995aa',
            color2 = 'rgba(0,0,0,0.2)';
        var option = {
			title:[
				{
					top: '26%',
					right: 'center',
					text: data1 + '%',
					textStyle: {
						color: color1,
						fontSize: 24,
						fontWeight :'bold'
					}
				},
				{
					top: '60%',
					right: 'center',
					text: '占比',
					textStyle: {
						color: '#2f3b4a',
						fontSize: 14,
						fontWeight :'normal'
						
					}
				},
			],
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: "images/icon-2.png",
                        width: 74,
                        height: 74
                    },
                    left: 'center',
                    top: 'center'
                }]
            },
            series: [{
                name: '',
                type: 'pie',
                //startAngle:45,
                clockWise: false, //顺时加载
                radius: ['85%', '100%'],
                center: ['50%', '50%'],
                data: [{
                    value: data1,
                    name: '',
                    labelLine:{
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00aea8'
                        }
                    },
                    hoverAnimation: false
                }, {
                    value: tol - data1,
                    name: '',
                    label: {
                        normal: {
                            show: false
                        }
                    },

                        itemStyle: {
							normal: {
								color: color2
							},
							emphasis: {
								color: color2
							}
                    	},
                    hoverAnimation: false
                }]
            }]
        };

        chart.setOption(option);
        $(window).on("resize", chart.resize);

    }
});
