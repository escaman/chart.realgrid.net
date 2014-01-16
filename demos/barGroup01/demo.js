$(function () {
	new ChartWeb.ChartView('chartviewhtml',
		 {
			"type": "bar",
			"palettes":[{
				"name": "blue",
				"colors":"#0080e0"
				}, {
				"name": "black",
				"colors":"#000000"
				}, {
				"name": "green",
				"colors":"#aadf10"
				}
			],				
			"title": {
				"caption": "�Ϲݱ� ����� �Ǹ� ���� ��Ȳ",
				"styles": {
					"textColor": "#f00000"
				},
				"subTitle":{
					"position": "bottom",
					"text": "��ǥ: ������� 10% �̻�",
					"styles": {
						"textAlign": "center",
						"textColor": "#2ab6da"				
					}
				}
			},
			"yAxes": {
				"title": {
					"styles":{
						"visible": false
					}
				},
				"categories": ["��ǻ��", "�����", "Ű����", "���콺", "����͹�ħ��"]
			},
			"xAxes": {
				"title": {
					"caption": "���� �ǸŽ���",
					"styles":{
						"textColor": "#389f2c"
					}
				},
				"baseValue": 0,
				"styles": {
					"grid": {
						"stroke": "#18000000"
					}
				}
			},
			"seriesGroups": {
				"name": "group1",
				"stackMode": "normal",
				"label": {
					"styles": {
					},
					"items": [
					]
				}
			},
			"series": [{
				"name": "�������1",
				"group": "group1",
				"items": [17, 13, 16, 13, 17],
				"styles": {
					"fill": "pal(blue)",
					"fillAlpha": 0.7,
					"strokeAlpha": 1,
					"label": {
						"horizontalAlign": "left",
						"textColor": "#eeeeee"
					}
				},
				"animations": [{
					"property": "mask"
				}]
				}, {
				"name": "�������2",
				"group": "group1",
				"items": [20, 20, 20, 20, 20],
				"styles": {
					"fill": "pal(black)",
					"fillAlpha": 0.7,
					"strokeAlpha": 1,
					"label": {
						"horizontalAlign": "left",
						"textColor": "#dddddd"
					}
				},
				"animations": [{
					"property": "mask"
				}]
				}, {
				"name": "�������3",
				"group": "group1",
				"items": [13, 11, 20, 12, 11],
				"styles": {
					"fill": "pal(green)",
					"fillAlpha": 0.7,
					"strokeAlpha": 1,
					"label": {
						"horizontalAlign": "left",
						"textColor": "#008800"
					}
				},
				"animations": [{
					"property": "mask"
				}]
			}],
			"legend": {
			}
		}
	);
});
