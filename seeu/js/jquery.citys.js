/**
 * jquery.citys.js 1.0
 * http://jquerywidget.com
 */
;(function (factory) {
    if (typeof define === "function" && (define.amd || define.cmd) && !jQuery) {
        // AMD或CMD
        define([ "jquery" ],factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        //Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.support.cors = true;
    $.fn.citys = function(parameter,getApi) {
        if(typeof parameter == 'function'){ //重载
            getApi = parameter;
            parameter = {};
        }else{
            parameter = parameter || {};
            getApi = getApi||function(){};
        }
        var defaults = {
            dataUrl:'../json/city.json',     //数据库地址
            dataType:'json',          //数据库类型:'json'或'jsonp'
            provinceField:'province', //省份字段名
            cityField:'city',         //城市字段名
            countyField:'county',         //地区字段名
            streetField:'street',         //街道字段名
            communityField:'community',  //社区字段名
            gridField:'grid',         //小网格字段名
            valueType:'code',         //下拉框值的类型,code行政区划代码,name地名
            code:0,                   //地区编码
            province:0,               //省份,可以为地区编码或者名称
            city:0,                   //城市,可以为地区编码或者名称
            county:0,                //地区,可以为地区编码或者名称
            street:0,				//街道,可以为街道编码或者名称
            community:0,			//社区,可以为社区编码或者名称
            grid:0,					//小网格,可以为小网格编码或者名称
            required: true,           //是否必须选一个
            show: false,           //是否禁止选中
            nodata: 'hidden',         //当无数据时的表现形式:'hidden'隐藏,'disabled'禁用,为空不做任何处理
            name: 'xzqhCode',		//返回name值
            onChange:function(){}     //地区切换时触发,回调函数传入地区数据
        };
        var options = $.extend({}, defaults, parameter);
        return this.each(function() {
            //对象定义
            var _api = {};
            var $this = $(this);
            var $province = $this.find('select[name="'+options.provinceField+'"]'),
                $city = $this.find('select[name="'+options.cityField+'"]'),
                $county = $this.find('select[name="'+options.countyField+'"]'),
            	$street = $this.find('select[name="'+options.streetField+'"]'),
            	$community = $this.find('select[name="'+options.communityField+'"]'),
            	$grid = $this.find('select[name="'+options.gridField+'"]');
            $.ajax({
                url:options.dataUrl,
                type:'GET',
                crossDomain: true,
                dataType:options.dataType,
                jsonpCallback:'jsonp_location',
                success:function(data){
                	  var province,city,county,street,community,grid,flagprovince,flagcity,flagcounty,flagstreet,flagcommunity,flaggrid;
                	  $("[name='"+options.name+"']").val(options.code);
                      if(options.code){   //如果设置地区编码，则忽略单独设置的信息
                    	  var b =options.code+"";
                    	  var c=Number(b.substr(0,2));                    
                    	   $.each(data.province,function(num,i){ 
                    		   if(this.id==c){
                                   options.province = c;
                                   flagprovince=true;                                   
                               }
                    	   });
                    	  
                    	   c=Number(b.substr(0,4));
                    	   $.each(data.city,function(num,i){ 
                    		   if(this.id==c){
                    			   options.city = c;
                    			   flagcity=true;
                               }
                    	   });

                         
                   	   	c=Number(b.substr(0,6)); 
                   	   $.each(data.county,function(num,i){ 
                		   if(this.id==c){
                			   options.county = c;
                			   flagcounty=true;
                           }
                	   });
                         
                      	c=Number(b.substr(0,9));
                      	 $.each(data.street,function(num,i){ 
                  		   if(this.id==c){
                  			   options.street = c;
                  			 flagstreet=true;
                             }
                  	   });
                       
                    	c=Number(b.substr(0,12));
                    	
                     	 $.each(data.community,function(num,i){ 
                 		   if(this.id==c){
                 			 	
                 			   options.community = c;
                 			  flagcommunity=true;
                 			  
                            }
                 	   });
                      
                    	c=options.code;
                   	 $.each(data.grid,function(num,i){ 
               		   if(this.id==c){
               			   options.grid = c;
               			flaggrid=true;
                          }
               	   });
                       
                      }                  

                    var updateData = function(){
                        
                        province = {},city={},county={},street={},community={},grid={};
                        hasCity = false;       //判断是非有地级城市
                        $.each(data.province,function(num,i){ 
                        	province[i.id] = i.name;
                      if(i.name==options.province){                       	  
                    	  options.province=i.id;
                      }
                        });
                        
                        $.each(data.city,function(num,i){ 
                        	if(options.province==i.subjection){
                        		hasCity=true;
                        		city[i.id] = i.name;
                        	}
                      if(i.name==options.city){                       	  
                    	  options.city=i.id;
                      }
                        });
                     	
                       
                        $.each(data.county,function(num,i){ 
                        	if(options.city==i.subjection){
                        		
                        		hasCity=true;
                        		county[i.id] = i.name;
                        	}
                      if(i.name==options.county){                       	  
                    	  options.county=i.id;
                      }
                        });
                        
                        $.each(data.street,function(num,i){
                        	if(options.county==i.subjection){   
                        		hasCity=true;
                        		street[i.id] = i.name;
                        	}
                      if(i.name==options.street){                       	  
                    	  options.street=i.id;
                      }
                        });
                        
                        $.each(data.community,function(num,i){ 
                        	if(options.street==i.subjection){
                        		hasCity=true;
                        		community[i.id] = i.name;
                        	}
                      if(i.name==options.community){                       	  
                    	  options.community=i.id;
                      }
                        });
                       
                        $.each(data.grid,function(num,i){
                        	if(options.community==i.subjection){
                        		hasCity=true;
                            	grid[i.id] = i.name;
                        	}

                      if(i.name==options.grid){                       	  
                    	  options.grid=i.id;
                      }
                        }); 
                       
                      
                    };
                    var format = {
                        province:function(){
                            $province.empty();
                            if(!options.required){
                                $province.append('<option value=""> - 请选择 - </option>');
                            }
                      
                            if(flagprovince&&options.show){
	                            	$province.prop('disabled','disabled');
                            }
                            for(var i in province){
                            	$province.append('<option value="'+(options.valueType=='code'?i:province[i])+'" data-code="'+i+'">'+province[i]+'</option>');

                            }
                           
                            if(options.province){
                                var value = options.valueType=='code'?options.province:province[options.province];
                                $province.val(value);
                            }
                            this.city();
                        },
                        city:function(){
                        
                            $city.empty();                          
                            if(!hasCity){
                                $city.css('display','none');
                            }else{
                                $city.css('display','');
                                if(!options.required){
                                    $city.append('<option value=""> - 请选择 - </option>');
                                }
                                if(options.nodata=='disabled'){
                                    $city.prop('disabled',$.isEmptyObject(city));
                                }else if(options.nodata=='hidden'){
                                    $city.css('display',$.isEmptyObject(city)?'none':'');
                                }
                                if(flagcity&&options.show){
                                	$city.prop('disabled','disabled');
                                }
                                for(var i in city){
                                    $city.append('<option value="'+(options.valueType=='code'?i:city[i])+'" data-code="'+i+'">'+city[i]+'</option>');
                                }
                                if(options.city){
                                    var value = options.valueType=='code'?options.city:city[options.city];
                                    $city.val(value);
                                }else if(options.county){
                                    var value = options.valueType=='code'?options.county:county[options.county];
                                    $city.val(value);
                                }
                            }
                            this.county();
                        },
                        county:function(){
                        
                            $county.empty();
                            if(!hasCity){
                                $county.css('display','none');
                            }else{
                                $county.css('display','');
                                if(!options.required){
                                    $county.append('<option value=""> - 请选择 - </option>');
                                }
                                if(options.nodata=='disabled'){
                                    $county.prop('disabled',$.isEmptyObject(county));
                                }else if(options.nodata=='hidden'){
                                    $county.css('display',$.isEmptyObject(county)?'none':'');
                                }
                                if(flagcounty&&options.show){
                                	$county.prop('disabled','disabled');
                                }
                                for(var i in county){
                                    $county.append('<option value="'+(options.valueType=='code'?i:county[i])+'" data-code="'+i+'">'+county[i]+'</option>');
                                }
                                if(options.county){
                                    var value = options.valueType=='code'?options.county:county[options.county];
                                    $county.val(value);
                                }else if(options.county){
                                    var value = options.valueType=='code'?options.street:street[options.street];
                                    $street.val(value);
                                }
                            }
                            this.street();
                        },                        
                        street:function(){   
                        
                            $street.empty();
                            if(!hasCity){
                                $street.css('display','none');

                            }else{
                                $street.css('display','');
                                if(!options.required){
                                    $street.append('<option value=""> - 请选择 - </option>');
                                }
                                if(options.nodata=='disabled'){
                                    $street.prop('disabled',$.isEmptyObject(street));
                                }else if(options.nodata=='hidden'){
                                    $street.css('display',$.isEmptyObject(street)?'none':''); 
                                    }
                              
                                if(flagstreet&&options.show){
                                	$street.prop('disabled','disabled');
                                }
                              
                                for(var i in street){                            
                                    $street.append('<option value="'+(options.valueType=='code'?i:street[i])+'" data-code="'+i+'">'+street[i]+'</option>');
                                }
                                if(options.street){
                                    var value = options.valueType=='code'?options.street:street[options.street];
                                    $street.val(value);
                                }else if(options.street){
                                    var value = options.valueType=='code'?options.community:community[options.community];
                                    $community.val(value);
                                }
                            }
                            this.community();
                        },
                        community:function(){
                       
                            $community.empty();
                            if(!hasCity){
                                $community.css('display','none');
                            }else{
                                $community.css('display','');
                                if(!options.required){
                                    $community.append('<option value=""> - 请选择 - </option>');
                                }
                                if(options.nodata=='disabled'){
                                    $community.prop('disabled',$.isEmptyObject(community));
                                }else if(options.nodata=='hidden'){
                                    $community.css('display',$.isEmptyObject(community)?'none':'');
                                }
                                if(flagcommunity&&options.show){
                                	$community.prop('disabled','disabled');
                                }
                                for(var i in community){
                                    $community.append('<option value="'+(options.valueType=='code'?i:community[i])+'" data-code="'+i+'">'+community[i]+'</option>');
                                }
                                if(options.community){
                                    var value = options.valueType=='code'?options.community:community[options.community];
                                    $community.val(value);
                                }else if(options.community){
                                    var value = options.valueType=='code'?options.grid:grid[options.grid];
                                    $grid.val(value);
                                }
                            }
                            this.grid();
                        },
                        
                        grid:function(){
                            $grid.empty();
                            if(!options.required){
                                $grid.append('<option value=""> - 请选择 - </option>');
                            }
                            if(options.nodata=='disabled'){
                                $grid.prop('disabled',$.isEmptyObject(grid));
                            }else if(options.nodata=='hidden'){
                                $grid.css('display',$.isEmptyObject(grid)?'none':'');
                            }
                            if(flaggrid&&options.show){
                            	$grid.prop('disabled','disabled');
                            }
                            for(var i in grid){
                                $grid.append('<option value="'+(options.valueType=='code'?i:grid[i])+'" data-code="'+i+'">'+grid[i]+'</option>');
                            }
                            if(options.grid){
                                var value = options.valueType=='code'?gridval:grid[options.grid];
                                $grid.val(value);
                            }
                        }
                    };
                    //获取当前地理信息
                    _api.getInfo = function(){
                        var status = {
                            direct:!hasCity,
                            province:province[options.province]||'',
                            city:city[options.city]||'',
                            county:county[options.county]||'',
                            street:street[options.street]||'',
                            community:community[options.community]||'',
                            grid:grid[options.grid]||'',
                            code:options.grid||options.community||options.street||options.county||options.city||options.province
                        };
                        return status;
                    };
                    //事件绑定
                    $province.on('change',function(){
                        options.province = $(this).find('option:selected').data('code')||0; //选中节点的区划代码 
                        if (options.province.length !== 0) {
						$("[name='"+options.name+"']").val(options.province);
						}                        
                        options.city = 0;
                        options.county = 0;
                        options.street = 0;
                        options.community = 0;
                        options.grid = 0;
                        updateData();
                        format.city();
                        options.onChange(_api.getInfo());
                    });
                    $city.on('change',function(){
                        options.city = $(this).find('option:selected').data('code')||0; //选中节点的区划代码
                        if (options.city.length !== 0) {
    						$("[name='"+options.name+"']").val(options.city);
    						}    
                        options.county = 0;
                        options.street = 0;
                        options.community = 0;
                        options.grid = 0;
                        updateData();
                        format.county();
                        options.onChange(_api.getInfo());
                    });
                    $county.on('change',function(){                   	
                    	  options.county = $(this).find('option:selected').data('code')||0; //选中节点的区划代码
                          if (options.county.length !== 0) {
      						$("[name='"+options.name+"']").val(options.county);
      						}    
                          options.street = 0;
                          options.community = 0;
                          options.grid = 0;
                          updateData();
                          format.street();
                          options.onChange(_api.getInfo());
                    });
                    $street.on('change',function(){
                    	  options.street = $(this).find('option:selected').data('code')||0; //选中节点的区划代码
                          if (options.street.length !== 0) {
      						$("[name='"+options.name+"']").val(options.street);
      						}       
                          options.community = 0;
                          options.grid = 0;
                          updateData();
                          format.community();
                          options.onChange(_api.getInfo());
                    });
                    $community.on('change',function(){
                        options.community = $(this).find('option:selected').data('code')||0; //选中节点的区划代码
                        if (options.community.length !== 0) {
    						$("[name='"+options.name+"']").val(options.community);
    						} 
                        options.grid = 0;
                        updateData();
                        format.grid();
                        options.onChange(_api.getInfo());
                    });
                    $grid.on('change',function(){
                        options.grid = $(this).find('option:selected').data('code')||0; //选中节点的区划代码
                        if (options.grid.length!== 0) {
    						$("[name='"+options.name+"']").val(options.grid);
    						} 
                        options.onChange(_api.getInfo());
                    });
                    //初始化
                   updateData();
                   format.province();
                    if(options.code){
                    	 options.onChange(_api.getInfo());
                    }
                     getApi(_api);
                }
            });
        });
    };
}));
