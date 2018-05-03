
        var setting = {
            view: {
                addHoverDom: addHoverDom,
                removeHoverDom: removeHoverDom,
                dblClickExpand: false,
                selectedMulti: false
            },
           
            data: {
                simpleData: {
                    enable: true
                }
            },
            edit: {
                enable: true,
                removeTitle: "删除按钮",
                renameTitle: "编辑按钮"
                
            },
			callback: {
				onClick: onClick,
				beforeClick: beforeClick,
				beforeEditName: beforeEditName,
				beforeRemove: beforeRemove
			}
		
        };

        var zNodes =[
            {id:1, pId:0, name:"消安科技", isParent:true}
        ];

        $(document).ready(function(){
            $.fn.zTree.init($("#tree"), setting, zNodes);
        });

        function onClick(e,treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("tree");
			zTree.expandNode(treeNode);
		}
        
        function beforeEditName(treeId, treeNode) {
		
			var zTree = $.fn.zTree.getZTreeObj("tree");
			zTree.selectNode(treeNode);
			setTimeout(function() {
				if (confirm("进入 " + treeNode.name + " 的编辑状态吗？")) {
					setTimeout(function() {
						zTree.editName(treeNode);
					}, 0);
				}
			}, 0);
			return false;
		}
        
        function beforeRemove(treeId, treeNode) {
			
			var zTree = $.fn.zTree.getZTreeObj("tree");
			zTree.selectNode(treeNode);
			return confirm("确认删除  " + treeNode.name + " 吗？");
		}
        
        function beforeClick(treeId, treeNode) {
			if (treeNode.isParent) {
				return true;
			} else {
				//alert(treeNode.id)
				return false;
			}
		}
        var newCount = 1;
        function addHoverDom(treeId, treeNode) {
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
                + "' title='' onfocus='this.blur();'></span>";
			 if((treeNode.id+"").length<=1){
				 sObj.after(addStr);	
			            } 	
            var btn = $("#addBtn_"+treeNode.tId);
            if (btn) btn.bind("click", function(){
            	var zTree = $.fn.zTree.getZTreeObj("tree");          	
            		zTree.addNodes(treeNode, {id:(treeNode.id+ "0"), pId:treeNode.id++, name:"请编辑名称" + (newCount++)});       
            		return false;   
            });
        };
        function removeHoverDom(treeId, treeNode) {
            $("#addBtn_"+treeNode.tId).unbind().remove();

        };
      
