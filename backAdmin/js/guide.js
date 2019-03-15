var coordinate_points_json = [
    {
        'x':0.24860849056603773,
        'y':0.391304347826087,
        'ex':0.4282311320754717,
        'ey':0.6151368760064412,
        'name':'01',
        'audioUrl':''
    },
    {'x':0.6070990566037736,'y':0.394524959742351,'ex':0.7874764150943396,'ey':0.6183574879227053,'name':'02'},
    {'x':0.5587971698113208,'y':0.7181964573268921,'ex':0.8387971698113208,'ey':0.8373590982286635,'name':'03'}
]
//console.log(1);
$(function() {
    //默认当前热区 
    var current_area = null;
    //创建热区遮罩
    $('#image_to_process').on('load', function(){
        var areas = $('#image_to_process').selectAreas('areas');
		if (areas.length>0){}else{
			current_area = null;
		}
    });
    //监测创建热点区域
    $('#image_to_process').on("changed", function(event, id, areas){
        console.log(areas);
    });

    
});