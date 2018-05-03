/**
 * Created by Administrator on 2017/8/21.
 */
$(function(){ //文档加载，执行一个函数
	
    $('#BuildInfo')
        .bootstrapValidator({
            message: 'This value is not valid',
            live: 'enabled', 
            trigger: 'blur',
            excluded: [':disabled', ':hidden', ':not(:visible)'],
            feedbackIcons: {//input状态样式图片
                valid: 'glyphicon ',
                invalid: 'glyphicon',
                validating: 'glyphicon'
            },  
            container:'popover',  
            fields: {//验证：规则           
            	plcBuildCode: {//验证input项：验证规则
            		message: '编码号无效', 
                    validators: {
                        notEmpty: {//非空验证：提示消息
                            message: '规土委建筑编号不能为空'
                        },
                        stringLength: {
                            min: 19,
                            max: 19,
                            container: 'popover',
                            message: '编码号长度必须19位'
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: '编码号必须为数字'
                        }
                    }
                }, buildName: {
                    message:'建筑名称无效',
                   
                    validators: {
                        notEmpty: {
                            message: '建筑名称不能为空'
                        },
                        stringLength: {
                            min: 4,
                            message: '建筑名称长度必须在4字符以上'
                        }
                    }
                	
                },buildAddress: {
                    message:'建筑地址无效',
                   
                    validators: {
                        notEmpty: {
                            message: '建筑地址不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: '建筑地址长度必须在6到30之间'
                        }
                    }
                },province: {
                    message:'省无效',
                   
                    validators: {
                        notEmpty: {
                            message: '省不能为空'
                        }
                    }
                },city: {
                    message:'市无效',
                   
                    validators: {
                        notEmpty: {
                            message: '市不能为空'
                        }
                    }
                },county: {
                    message:'区无效',
                   
                    validators: {
                        notEmpty: {
                            message: '区不能为空'
                        }
                    }
                },street: {
                    message:'街无效',
                    	   validators: {
                               notEmpty: {
                                   message: '街不能为空'
                               }
                           }
                   
                },community: {
                    message:'社区无效',
                    validators: {
                        notEmpty: {
                            message: '社区不能为空'
                        }
                    }
                   
                },grid: {
                    message:'网格无效',
                    validators: {
                        notEmpty: {
                            message: '网格不能为空'
                        }
                    }
                   
                },buildStatus: {
                    validators: {
                        notEmpty: {
                            message: '建筑情况不能为空'
                        }
                    }
                } , completedDate: {
                    validators: {	
                    	notEmpty: {
                            message: '竣工日期不能为空'
                        },
                        date: {
                            format: 'YYYY-MM-DD',
                            message: '编辑格式-YYYY-MM-DD'
                        }
                    }
                }, propertyRightAndUse: {
                    validators: {
                        notEmpty: {
                            message: '建筑产权及使用情况不能为空'
                        }
                    }
                } ,maximumCapacity: {
                    message:'最大容纳人数无效',
                   
                    validators: {
                        notEmpty: {
                            message: '最大容纳人数不能为空'
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
                controlRoomLocation: {
                    message: '消防控制室位置无效',
                   
                    validators: {
                        notEmpty: {
                            message: '消防控制室位置不能为空'
                        }
                    }
                },
                floorSpace: {
                    message:'占地面积无效',
                   
                    validators: {
                        notEmpty: {
                            message: '占地面积不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                standardFloorSize: {
                    message:'标准层面积无效',
                   
                    validators: {
                        notEmpty: {
                            message: '标准层面积不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                buildingArea: {
                    message:'建筑面积无效',
                   
                    validators: {
                        notEmpty: {
                            message: '建筑面积不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                groundArea: {
                    message:'地上面积无效',
                   
                    validators: {
                        notEmpty: {
                            message: '地上面积不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                
                undergroundArea: {
                    message:'地下面积无效',
                   
                    validators: {
                        notEmpty: {
                            message: '地下面积不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                buildingHeight: {
                    message:'建筑高度无效',
                   
                    validators: {
                        notEmpty: {
                            message: '建筑高度不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                groundLayerNumber: {
                    message:'地上层数无效',
                   
                    validators: {
                        notEmpty: {
                            message: '地上层数不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                undergroundLayerNumber: {
                    message:'地下层数无效',
                   
                    validators: {
                        notEmpty: {
                            message: '地下层数不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                            
                refugeFloorArea: {
                    message:'避难层面积无效',
                   
                    validators: {
                        notEmpty: {
                            message: '避难层面积不能为空'
                        }, regexp: {
                            regexp: /^\d+(\.\d+)?$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                'refugeFloorLocation': {
                    message:'避难层位置无效',                  
                    validators: {
                    	 notEmpty: {
                            message: '避难层位置不能为空'
                        }
                    }
                },
                
                fireElevatorNumber: {
                    message:'消防电梯数量无效',
                   
                    validators: {
                        notEmpty: {
                            message: '消防电梯数量不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                fireElevatorLocation: {
                    message:'消防电梯位置无效',                  
                    validators: {
                        notEmpty: {
                            message: '消防电梯位置不能为空'
                        }
                    }
                },
                
                buildClassify: {
                    message:'建筑分类无效',                 
                    validators: {
                        notEmpty: {
                            message: '建筑分类不能为空'
                        }
                    }
                },
                
                'buildUse': {
                    message:'建筑用途无效',                 
                    validators: {
                        notEmpty: {
                            message: '建筑用途不能为空'
                        }
                    }
                },
                
                buildStructure: {
                    message:'建筑结构无效',                 
                    validators: {
                        notEmpty: {
                            message: '建筑结构不能为空'
                        }
                    }
                },
                
                fireResistanceRating: {
                    message:'耐火等级无效',                 
                    validators: {
                        notEmpty: {
                            message: '耐火等级不能为空'
                        }
                    }
                },
                
                adjacentBuildings: {
                    message:'毗邻建筑情况无效',                 
                    validators: {
                        notEmpty: {
                            message: '毗邻建筑情况不能为空'
                        }
                    }
                },
                
                xzqhCode: {
                    message:'区划编号无效',                 
                    validators: {                
                        notEmpty: {
                            message: '区划编号不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        },stringLength: {
                        	min:2, 
                            message: '编码长度必须大于1位'
                        }
                    }
                },
                
                isControlRoom: {
                    message:'消防控制室情况无效',                 
                    validators: {                
                        notEmpty: {
                            message: '消防控制室情况不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                gtwLon: {
                    message:'入规土委经度无效',                 
                    validators: {
                        notEmpty: {
                            message: '入规土委经度不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                
                gtwLat: {
                    message:'规土委纬度无效',                 
                    validators: {
                        notEmpty: {
                            message: '规土委纬度不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
                
                bdLon: {
                    message:'百度经度无效',                 
                    validators: {
                        notEmpty: {
                            message: '百度经度不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },
              
                	buildImage: {
                        validators: {
                            notEmpty: {
                                message: '文件不能为空'
                            }
                        }
                    },
                
                bdLat: {
                    message:'百度纬度无效',                 
                    validators: {
                        notEmpty: {
                            message: '百度纬度不能为空'
                        }, regexp: {
                            regexp: /^[0-9]+$/,
                            message: '必须为数字'
                        }
                    }
                },


            }
        }).on('success.form.bv', function(e) {//点击提交之后
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
            if( bv.isValid()){
                var data = {};
                var t = $('#BuildInfo').serializeArray();
                var i=0
                $.each(t, function() { 
                
                 if(this.name=="grid"){
                	 if (this.value.length!==0) {                		
                	 data['xzqhCode'] = this.value; 
                	 }
                 }else if(this.name=="community"){              	 
                	 if (this.value.length!==0) { 
                    	 data['xzqhCode'] = this.value; 
                    	
                    	 }
                 }else if(this.name=="street"){               	
                	 if (this.value.length!==0) { 
                    	 data['xzqhCode'] = this.value; 
                    	
                    	 }
                 }else if(this.name=="county"){                	
                	 if (this.value.length!==0) { 
                    	 data['xzqhCode'] = this.value;                     	
                    	 }
                	 
                 }else{
                	
                		if(this.name=="buildUse"){
                    		if(i!=0){
        						data[this.name]+=','+this.value
        					}else{
        					data[this.name]=this.value;
        					i++;
        					}
                    	}else if(this.name=="refugeFloorLocation"){
                    		if(i!=0){
        						data[this.name]+=','+this.value
        					}else{
        					data[this.name]=this.value;
        					i++;
        					}
                    	}else if(this.name=="buildImage"){                   		
                    		data['buildImage']=$("#BuildInfo [name='fileimgid']").val();
                    		
                    	}else{
                    		i=0
                    		data[this.name] = this.value; 
                    	}
                    	
                 }
              });
                
                // 使用Ajax提交form表单数据
            alert(JSON.stringify(data))
         		$.ajax({
     		    url: "/build/add",
     		    type: "post",	
     		   contentType: "application/json; charset=utf-8",
     	        data: JSON.stringify(data),
     	        dataType: "json",
     		    success: function(data) {
     		    	if(data.status==200){
     		    	$(window).unbind('beforeunload');
     		    	toastr.success(data.msg)
     		    	}else{
     		    	toastr.error(data.msg)
     		    	}
     		    },
     		    error:function(data){
         			toastr.error("服务器无响应")
         		}
     		});	
               
            }

        });  
    
  
    
  
  //气体灭火验证
    $('#GasExtinguishingSystem')
    .bootstrapValidator({
        message: 'This value is not valid',
        live: 'enabled',
        trigger:'blur keyup',   
        feedbackIcons: {//input状态样式图片
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        container: 'popover',
        fields: {//验证：规则           	
        	systemName: {
                  message:'系统名称',             
                  validators: {
                      notEmpty: {
                          message: '系统名称不能为空'
                      }
                  }
              },
              systemState: {
                  message:'系统状态',                  
                  validators: {
                      notEmpty: {
                          message: '系统状态不能为空'
                      }
                  }
              },
              systemForm: {
                  message:'系统形式',                  
                  validators: {
                      notEmpty: {
                          message: '系统形式不能为空'
                      }
                  }
              },
              installingPositions: {
                message:'设置部位',             
                validators: {
                    notEmpty: {
                        message: '设置部位不能为空'
                    }
                }
            },
            responsibleDepartment: {
                message:'责任部门',                  
                validators: {
                    notEmpty: {
                        message: '责任部门不能为空'
                    }
                }
            },
            personCharge: {
                message:'责任人',             
                validators: {
                    notEmpty: {
                        message: '责任人不能为空'
                    }
                }
            },
            maintainingUnit: {
                message:'维修保养单位',             
                validators: {
                    notEmpty: {
                        message: '维修保养单位不能为空'
                    }
                }
            },
            designUnit: {
                message:'设计单位',             
                validators: {
                    notEmpty: {
                        message: '设计单位不能为空'
                    }
                }
            },
            constructionUnit: {
                message:'施工单位',             
                validators: {
                    notEmpty: {
                        message: '施工单位不能为空'
                    }
                }
            },
            supervisingUnit: {
                message:'监理单位',             
                validators: {
                    notEmpty: {
                        message: '监理单位不能为空'
                    }
                }
            },        
            doYouHaveFireSign: {
                message:'消防标识',             
                validators: {
                    notEmpty: {
                        message: '必须选择消防标识'
                    }
                }
            },
            operationMethod: {
                message:'操作使用方法',             
                validators: {
                    notEmpty: {
                        message: '操作使用方法不能为空'
                    }
                }
            },
            otherSituations: {
                message:'其它情况',             
                validators: {
                    notEmpty: {
                        message: '其它情况不能为空'
                    }
                }
            },
            fireForm: {
                message:'灭火形式',             
                validators: {
                    notEmpty: {
                        message: '灭火形式不能为空'
                    }
                }
            },
            sprayPumpSettingPosition: {
                message:'喷淋泵设置部位',             
                validators: {
                    notEmpty: {
                        message: '喷淋泵设置部位不能为空'
                    }
                }
            },
            alarmValveQuantity: {
                message:'报警阀数量',             
                validators: {
                    notEmpty: {
                        message: '报警阀数量不能为空'
                    },regexp: {
                        regexp: /^[0-9]+$/,
                        message: '必须为数字'
                    }
                }
            },
            cylinderQuantity1: {
                message:'钢瓶（一）数量',             
                validators: {
                    notEmpty: {
                        message: '钢瓶（一）数量不能为空'
                    },regexp: {
                        regexp: /^[0-9]+$/,
                        message: '必须为数字'
                    }
                }
            },
            cylinderQuantity2: {
                message:'钢瓶（二）数量',             
                validators: {
                    notEmpty: {
                        message: '钢瓶（二）数量不能为空'
                    },regexp: {
                        regexp: /^[0-9]+$/,
                        message: '必须为数字'
                    }
                }
            },
            protectedArea1: {
                message:'防护区部位1',             
                validators: {
                    notEmpty: {
                        message: '防护区部位1不能为空'
                    }
                }
            },
            protectedArea2: {
                message:'防护区部位2',             
                validators: {
                    notEmpty: {
                        message: '防护区部位2'
                    }
                }
            },
            bottleRepositoryLocation: {
                message:'瓶库位置',             
                validators: {
                    notEmpty: {
                        message: '瓶库位置不能为空'
                    }
                }
            },
            'actionMethod[]': {
                message:'动作方式',             
                validators: {
                    notEmpty: {
                        message: '动作方式不能为空'
                    }
                }
            },
            singleCylinderCapacity1: {
                message:'单个钢瓶容量',             
                validators: {
                    notEmpty: {
                        message: '单个钢瓶容量不能为空'
                    },regexp: {
                        regexp: /^\d+(\.\d+)?$/,
                        message: '必须为数字或小数'
                    }
                }
            },
            protectedCubage1: {
                message:'防护区容积1',             
                validators: {
                    notEmpty: {
                        message: '防护区容积1不能为空'
                    },regexp: {
                        regexp: /^\d+(\.\d+)?$/,
                        message: '必须为数字或小数'
                    }
                }
            },
            protectedCubage2: {
                message:'防护区容积2',             
                validators: {
                    notEmpty: {
                        message: '防护区容积2不能为空'
                    },regexp: {
                        regexp: /^\d+(\.\d+)?$/,
                        message: '必须为数字或小数'
                    }
                }
            },
        }
    }).on('success.form.bv', function(e) {//点击提交之后
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        if( bv.isValid()){
            var data = {};
            var t = $('#HouseInfo').serializeArray();
            $.each(t, function() {
             data[this.name] = this.value;
          });
          //  alert(JSON.stringify(data))
            // 使用Ajax提交form表单数据
    		$.ajax({
     		    url: 'http://localhost:8080/build',
     		    type: 'post',	
     		    contentType: "application/json; charset=utf-8",
     	        data: JSON.stringify(data),
     	        dataType: "json",
     		    success: function(data) {
     		    	toastr.success(data.msg,data.status)
     		    	
     		    },
     		    error:function(data){
     			toastr.error(data.msg,data.status)
     		}
     		});
        }

    }); 
    
  
    
 
    
  


    $('.date').on('dp.change dp.show', function (e) {
        // Revalidate the date when user change it
        $('#BuildInfo').bootstrapValidator('revalidateField', 'completedDate');
        $('#BuildInfo').bootstrapValidator('revalidateField', 'registerDate');
        $('#BuildInfo').bootstrapValidator('revalidateField', 'approvalDate');
    });
    
});
/**qutdoorPoolCapacity: {
    message:'室外水池容量',                  
    validators: {
        notEmpty: {
            message: '不能为空'
        },regexp: {
            regexp: /^\d+(\.\d+)?$/,
            message: '必须为数字或小数'
        },regexp: {
            regexp: /^[0-9]+$/,
            message: '必须为数字'
        },date: {
            format: 'YYYY-MM-DD',
            message: '编辑格式-YYYY-MM-DD'
        },stringLength: {
            min: 11,
            max: 11,
            message: '请输入11位手机号码'
        },regexp: {
            regexp: /^1[3|5|8]{1}[0-9]{9}$/,
            message: '请输入正确的手机号码'
        },regexp: {
            regexp: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
            message: '邮箱格式不对'
        }
    }
},*/
