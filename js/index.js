$(function() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
        //   title: {
        //     text: "模拟迁徙",
        //     subtext: "数据纯属虚构",
        //     left: "center",
        //     textStyle: {
        //       color: "#fff",
        //     },
        //   },
        amap: {
            maxPitch: 60,
            pitch: 10, //45 俯仰角
            viewMode: "3D",
            zoom: 5.5,
            expandZoomRange: true,
            zooms: [3, 20],
            mapStyle: "amap://styles/darkblue", //地图主题
            center: [110, 33], //中心点
            rotation: 0, //顺时针旋转角度
            resizeEnable: true,
        },
        animation: false,
        series: [],
    });

    //上面的部分是echarts的配置，需要注意的是amap，这里的配置就是针对 高德地图 的配置了，而支持哪些配置
    //可以去高德地图的开发平台去查看

    var map = myChart.getModel().getComponent("amap").getAMap();
    var layer = myChart.getModel().getComponent("amap").getLayer();

    AMap.plugin(["AMap.ControlBar"], function() {
        var bar = new AMap.ControlBar();
        map.addControl(bar);
    });

    AMap.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });

    AMap.event.addListener(map, "zoomend", function() {
        console.log("当前缩放级别：" + map.getZoom());
        console.log("俯视视角" + map.getPitch());
        console.log("俯视视角" + map.getPitch());
    });

    var series = [{
            name: "上海 Top10",
            coordinateSystem: "amap",
            type: "lines",
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: "#fff",
                symbolSize: 3,
            },
            lineStyle: {
                normal: {
                    color: "#a6c84c",
                    width: 0,
                    curveness: 0.2,
                },
            },
            data: [{
                fromName: "上海",
                toName: "包头",
                coords: [
                    [121.4648, 31.2891],
                    [109.853634, 40.651412],
                ],
                value: 95,
            }, ],
        },
        {
            name: "上海 Top10",
            coordinateSystem: "amap",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#a6c84c",
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2,
                },
            },
            data: [{
                fromName: "上海",
                toName: "包头",
                coords: [
                    [121.4648, 31.2891],
                    [109.853634, 40.651412],
                ],
                value: 95,
            }, ],
        },
        {
            name: "上海 Top10",
            type: "effectScatter",
            coordinateSystem: "amap",
            zlevel: 2,
            rippleEffect: {
                brushType: "stroke",
            },
            label: {
                normal: {
                    show: true,
                    position: "bottom",
                    formatter: "{b}",
                },
            },
            itemStyle: {
                normal: {
                    color: "#a6c84c",
                },
            },
            data: [{
                name: "包头",
                value: [109.853634, 40.651412, 95],
            }, ],
        },
    ];

    myChart.setOption({
        series: series,
    });

    //下面是确保高德地图渲染的时候，echarts同时也需要再次渲染一次，保持位置的同步
    layer.render = function() {
        // let series = myChart.getOption().seriesIndexes;
        // myChart.setOption({
        //     series: []
        // });
        myChart.setOption({
            series: series,
        });

        console.log("当前缩放级别：" + map.getZoom());
        console.log("俯视视角：" + map.getPitch());
        console.log("顺时针：" + map.getRotation());
    };
});

// 基于准备好的dom，初始化echarts实例
var myChartLeftOne = echarts.init(document.getElementById("lefts-one"));
var myChartLeftTwo = echarts.init(document.getElementById("lefts-two"));
var myChartLeftThree = echarts.init(document.getElementById("lefts-three"));
var myChartLeftFour = echarts.init(document.getElementById("lefts-four"));

// 指定图表的配置项和数据


option = {
    title: {
        show: true,
        text: 'XXX',
        itemStyle: {
            color: '#fff',
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        right: 10,
        // bottom:center,
        data: ['直接访问', '邮件营销', '联盟广告']
    },
    series: [{
        name: '业务指标',
        center: ['45%', '65%'], // 默认全局居中
        type: 'gauge',
        detail: {
            formatter: '100%\n处置率',
            fontSize: 11,
            color: '#fff',
            // lineHeight: 54
            // lineHeight: 56,
        },

        data: [{ value: 100 }, ],
        axisTick: { // 坐标轴小标记
            show: false,
            color: '#ffffff',
            show: false

        },
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                width: 10,
                color: [
                    [0.35, '#FB5274'],
                    [0.7, '#F3C908'],
                    [1, '#0286FF']
                ]
            },
        },
        pointer: {
            width: 4,
            itemStyle: {
                color: '#ffffff'
            },
            length: '50%'
        },
        radius: '100%',
        splitLine: { // 分隔线
            show: false,
            length: 8, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
            }
        },

    }]
};

// 使用刚指定的配置项和数据显示图表。
myChartLeftOne.setOption(option);
myChartLeftTwo.setOption(option);
myChartLeftThree.setOption(option);

optionLeftFour = {
    title: {
        text: 'XXX',
    },
    // width: '80%',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        // data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    itemStyle: { color: '#FBC374' },

    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        // type: 'category',
        nameTextStyle: {
            color: '#fff'
        },
        data: ['政策法规宣传', 'XXX', '安全隐患', 'XXX', '信息采集更新'],

    },
    series: [{
            // name: '2011年',
            type: 'bar',
            data: [50, 60, 70, 80, 90, 100],
            center: ['25%', '5%'], // 默认全局居中

        },

        // {
        //     name: '2012年',
        //     type: 'bar',
        //     data: [19325, 23438, 31000, 121594, 134141, 681807]
        // }
    ]
};

myChartLeftFour.setOption(optionLeftFour);


// rights-one
// var myChartRightsOne = echarts.init(document.getElementById("rights-one"));


// 右边 echarts
var myChartRightsOne = echarts.init(document.getElementById("rights-two-div-ones"));
var myChartRightsTwo = echarts.init(document.getElementById("rights-two-div-two"));
var myChartRightsThree = echarts.init(document.getElementById("rights-four-div-three"));
var myChartRightsFour = echarts.init(document.getElementById("rights-four-div-four"));


optionRightOne = {
    color: ['#FFD302', '#FB5274', '#0286FF'],
    legend: {
        orient: 'vertical',
        right: 10,
        // bottom:center,
        data: ['自住', '租住', '空闲'],
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        right: "10%",
        top: '28%',
        itemWidth: 2
    },
    title: {
        text: '住房总数\n1786',
        top: '40%',
        textAlign: "center",

        left: "38%",
        textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: '400'
        }
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            // radius: ['50%', '60%'],
            radius: ['70%', '80%'],

            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            // left: 1,
            label: {
                show: false,
                // position: 'left'
                // left: '10%'
                // position: ['30%', '10%'],
            },
            emphasis: {
                label: {
                    show: false,
                    // fontSize: '30',
                    // fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '自住' },
                { value: 310, name: '租住' },
                { value: 234, name: '空闲' }
            ],
        }
    ]
};

// 其他总数
optionRightTwo = {
    color: ['#01BA5D', '#FB5274', '#0286FF'],
    legend: {
        orient: 'vertical',
        right: 10,
        // bottom:center,
        data: ['生产', '经营', '空闲'],
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        right: "10%",
        top: '28%',
        itemWidth: 2
    },
    title: {
        text: '其他总数\n2198',

        top: '40%',
        textAlign: "center",

        left: "38%",
        textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: '400'
        }
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '80%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            // left: 1,
            label: {
                show: false,
                // position: 'left'
                // left: '10%'
                // position: ['30%', '10%'],
            },
            emphasis: {
                label: {
                    show: false,
                    // fontSize: '30',
                    // fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '生产' },
                { value: 310, name: '经营' },
                // { value: 234, name: '空闲' }
            ],
        }
    ]
};

// 实有人口 2-1
optionRightThree = {
    color: ['#0286FF', '#FFD302'],
    legend: {
        orient: 'vertical',
        right: 10,
        // bottom:center,
        data: ['户籍', '流动'],
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        right: "10%",
        top: '28%',
        itemWidth: 2
    },
    title: {
        text: '人口总数\n1627',
        top: '40%',
        textAlign: "center",

        left: "38%",
        textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: '400'
        }
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            // radius: ['50%', '60%'],
            radius: ['70%', '80%'],

            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            // left: 1,
            label: {
                show: false,
                // position: 'left'
                // left: '10%'
                // position: ['30%', '10%'],
            },
            emphasis: {
                label: {
                    show: false,
                    // fontSize: '30',
                    // fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '户籍' },
                { value: 40, name: '流动' }
            ],
        }
    ]
};

// 实有人口 2-2
optionRightFour = {
    color: ['#FB5274'],
    legend: {
        orient: 'vertical',
        right: 10,
        // bottom:center,
        data: ['自住', '租住', '空闲'],
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        right: "10%",
        top: '28%',
        itemWidth: 2
    },
    title: {
        text: '移动用户\n15',
        top: '40%',
        textAlign: "center",

        left: "38%",
        textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: '400'
        }
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            // radius: ['50%', '60%'],
            radius: ['70%', '80%'],

            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            // left: 1,
            label: {
                show: false,
                // position: 'left'
                // left: '10%'
                // position: ['30%', '10%'],
            },
            emphasis: {
                label: {
                    show: false,
                    // fontSize: '30',
                    // fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '自住' },
            ],
        }
    ]
};

myChartRightsOne.setOption(optionRightOne);
myChartRightsTwo.setOption(optionRightTwo);
myChartRightsThree.setOption(optionRightThree);
myChartRightsFour.setOption(optionRightFour);