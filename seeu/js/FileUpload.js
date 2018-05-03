//附件上传
function ajaxFileUpload(Fileid, Imgid,UrlName) {
	var flag = ValidatorUpload(Fileid);
	if (flag) {
		var file = $("#" + Fileid).val()

		var filename = file.replace(
				/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi, "$1");
		FileUpload( Fileid, Imgid, UrlName,filename)
	}
}

//保存图片
function ajaxFileUploadImg(Fileid, Imgid,drawingType,floorCode) {
	var flag = ValidatorUpload(Fileid);
	if (flag) {
		var file = $("#" + Fileid).val()
		var filename = file.replace(
				/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi, "$1");
		var data = {				
					  "buildCode": getUrlParam("buildCode"),
					  "drawingName": filename,
					  "drawingType":drawingType,
					  "floorCode":floorCode		
		};
		
		FileUploadImg(data, Fileid, Imgid,filename)
	}
}

function ValidatorUpload(fileid) {
	var id = document.getElementById(fileid);
	var filepath = id.value;
	var extStart = filepath.lastIndexOf(".");
	var ext = filepath.substring(extStart, filepath.length).toUpperCase();
	if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG"
			&& ext != ".JPEG") {
		toastr.error("图片限于bmp,png,gif,jpeg,jpg格式");
		$('#' + fileid).val("");
		return false;
	}
	var file_size = 0;

	if (window.navigator.userAgent.indexOf("Chrome") >= 1
			|| window.navigator.userAgent.indexOf("Safari") >= 1) {

		file_size = id.files[0].size;
		var size = file_size;
		if (size > 3 * 1024 * 1024) {
			toastr.error("上传的图片大小不能超过3M！");
			$('#' + fileid).val("");
			return false;
		} else {
			// var num01 = file_size / 1024;
			// num02 = num01.toFixed(2);
			// $("#fileSize").text(num02 + " KB");
			return true;
		}
	} else {
		id.select();
		var img = new Image()
		if (img.fileSize > 0) {
			if (img.fileSize > 3 * 1024) {
				toastr.error("图片不大于3MB。");
				$('#' + fileid).val("");
				return false;
			} else {
				// var num03 = img.fileSize / 1024;
				// num04 = num03.toFixed(2)
				// $("#fileSize").text(num04 + "KB");
				return true;
			}

		}

	}
};

function FileUpload(Fileid, Imgid,UrlName,filename) {
	$
			.ajaxFileUpload({
				type : 'POST',
				url : '/upload',
				secureuri : false,
				fileElementId : Fileid, // 与html代码中的input的id值对应
				dataType : 'json',
				success : function(data, status) {
					if (data.status == 200) {
						toastr.success(data.msg)
						$('#' + Imgid).attr('src', data.data.fileurl);
						$("[name='" + UrlName + "']").val(data.data.fileurl);
						$(".btn-file .btn")
								.html(
										'修改图片 <i class="fa fa-refresh" style="margin-left: 5px;"></i>');							
						$('#' +Imgid).next().text(filename);
					} else {
						toastr.error(data.msg)
					}

					$('#' + Fileid).val("");

				},
				error : function(data) {
					toastr.error("服务器无响应")
					$('#' + Fileid).val("");
				}
			})
}


function FileUploadImg(data, Fileid, Imgid,filename) {

	$
			.ajaxFileUpload({
				type : 'POST',
				url : '/upload',
				secureuri : false,
				fileElementId : Fileid, // 与html代码中的input的id值对应
				dataType : 'json',
				success : function(result) {
					if (result.status == 200) {
						data.drawingUrl=result.data.fileurl;
						$.ajaxFileUpload({
							type : 'POST',
							url : '/twodimensionaldrawing/edit',
							secureuri : false,
							fileElementId : Fileid, // 与html代码中的input的id值对应
							data:data,
							dataType : 'json',
			     		    success: function(result) {
			     		   	if (result.status == 200) {
			     		   	toastr.success(result.msg)
			     		   	$('#' +Imgid).next().text(filename);
			     		  	var href=$(".x_top1 .btn-color").attr("href");	 		    		
		 		    		$("#ok").load(href);		     		    	
			     		   	}else {
								toastr.error(result.msg)
							}
			     		    }
			     		});
						
					} else {
						toastr.error(result.msg)
					}

					$('#' + Fileid).val("");

				},
				error : function() {					
					$('#' + Fileid).val("");
				}
			})
}

