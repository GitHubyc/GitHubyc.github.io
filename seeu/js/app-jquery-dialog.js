// 用于通某个元素共享配置数据
$.extend($.fn, {
    formOption : function(showOpt) {
        var opt = $.data(this[0], "formOpt");

        var settings;
        if (opt) {
            settings = $.extend({}, opt, showOpt);
        } else {
            settings = showOpt;
        }

        $.data(this[0], "formOpt", settings);
    },
    getFormOpt : function() {
        if (this[0] != undefined) {
            var opt = $.data(this[0], "formOpt");
            if (opt != undefined && opt != null)
                return opt;
        }
        return {};
    }
})

$.FORM = {
    showConfirm : function(showOpt) {
        var opt = {
            title : showOpt.title,
            message : showOpt.message,
            draggable : true,
            closeByBackdrop : false,
            type : BootstrapDialog.TYPE_WARNING,
            buttons : [
                {
                    id : "btn-confirm",
                    icon : 'glyphicon glyphicon-saved',
                    label : '确定',
                    cssClass : 'btn-warning',
                    action : function(dialogItself) {
                        if (showOpt.url != undefined) {
                            $.HTTP
                                .obj({
                                    type : showOpt.ajaxType == undefined ? 'post'
                                        : showOpt.ajaxType,
                                    url : showOpt.url,
                                    ajaxData : showOpt.ajaxData,
                                    success : function(json) {
                                        if (showOpt.autoClose) {
                                            dialogItself.close();
                                            $.NOTIFY
                                                .showSuccess(
                                                    showOpt.successTitle,
                                                    showOpt.successMessage);
                                        } else {
                                            dialogItself
                                                .setTitle(showOpt.successTitle);
                                            dialogItself
                                                .setMessage(showOpt.successMessage);
                                            dialogItself
                                                .setType(BootstrapDialog.TYPE_SUCCESS);
                                            dialogItself
                                                .setButtons([ {
                                                    icon : 'glyphicon glyphicon-saved',
                                                    label : '确定',
                                                    cssClass : 'btn-success',
                                                    action : function(
                                                        d) {
                                                        d.close();
                                                    }
                                                } ]);
                                        }

                                        if (showOpt.onSuccess)
                                            showOpt.onSuccess(json);
                                    }
                                })
                        } else {
                            if (showOpt.onConfirm(dialogItself)) {
                                dialogItself.close();
                            }
                        }

                    }
                }, {
                    icon : 'glyphicon glyphicon-ban-circle',
                    label : '取消',
                    action : function(dialogItself) {
                        dialogItself.close();
                    }
                } ]
        };

        var dialog = BootstrapDialog.show(opt);
        return dialog;
    },
    /**
     * title,isReadOnly,postUrl,data,dataSource,fields,properties,dependencies ,
     * formNodeCallback 收集表单信息回调
     */
    showFormDialog : function(showOpt) {

        var dialog;
        var buttons;
        var showD = function(showOpt, data) {
            if (showOpt.isReadOnly != undefined && showOpt.isReadOnly != null) {
                if (showOpt.isReadOnly) {
                    // 只读模式
                } else {
                    // 修改模式
                    buttons = [ {
                        icon : 'glyphicon glyphicon-saved',
                        label : '修改',
                        cssClass : 'btn-primary',
                        action : function(dialogItself) {
                            $.FORM.postForm(showOpt, dialogItself);
                        }
                    }, {
                        icon : 'glyphicon glyphicon-ban-circle',
                        label : '取消',
                        action : function(dialogItself) {
                            dialogItself.close();
                        }
                    } ];
                }
            } else {
                // 添加模式
                buttons = [ {
                    icon : 'glyphicon glyphicon-saved',
                    label : '保存',
                    cssClass : 'btn-primary',
                    action : function(dialogItself) {
                        $.FORM.postForm(showOpt, dialogItself);
                    }
                }, {
                    icon : 'glyphicon glyphicon-ban-circle',
                    label : '取消',
                    action : function(dialogItself) {
                        dialogItself.close();
                    }
                } ];
            }

            dialog = $.FORM.showDialog(showOpt, buttons, data);

        }

        // 如果有数据先加载数据
        if (showOpt.dataSource != undefined && showOpt.dataSource != null) {
            $.ajax({
                type : "get",
                async : false,
                url : showOpt.dataSource,
                contentType : 'application/json',
                dataType : "json",
                success : function(json) {
                    if (json.stat == 1) {
                        showD(showOpt, json.data);
                    } else {
                        if (json.code != undefined) {
                            $.FORM.show_code_err(dialog, json);
                        } else {
                            $.FORM.show_sys_err(dialog);
                            return;
                        }
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    var info = "XMLHttpRequest:"
                        + JSON.stringify(XMLHttpRequest) + " ;textStatus:"
                        + textStatus + "; errorThrown:"
                        + JSON.stringify(errorThrown) + "; 【"
                        + showOpt.postUrl + "】";
                    console.log("系统错误 【url: " + showOpt.postUrl + "】" + info);
                    $.FORM.show_sys_err(dialog, XMLHttpRequest);
                }
            });
        } else {
            showD(showOpt, {});
        }

    },

    showDialog : function(showOpt, buttons, data) {
        showOpt.buttons = $.extend(showOpt.buttons, buttons);
        showOpt.data = $.extend({}, showOpt.data, data);

        if (showOpt.buttons == undefined || showOpt.buttons == null) {
            showOpt.buttons = [ {
                icon : 'glyphicon glyphicon-ok',
                label : '确定',
                cssClass : 'btn-primary',
                action : function(dialogItself) {
                    dialogItself.close();
                }
            } ];
        }

        var cont = $('<div>加载数据中，请稍后...</div>');
        var opt = $
            .extend(
                {
                    title : showOpt.title,
                    message : function(dialog) {
                        return cont;
                    },
                    onshown : function(dialogRef) {
                        var contTmp = $('<div></div>');

                        var response = '';
                        if (showOpt.templateUrl) {
                            $
                                .ajax({
                                    url : showOpt.templateUrl,
                                    async : false,
                                    success : function(res) {
                                        try {
                                            var t = eval("(" + res
                                                + ")");
                                            if (t != null
                                                && t.stat == 0) {
                                                $.FORM
                                                    .show_code_err(
                                                        null,
                                                        t);
                                                if (t.code == 1403) {
                                                    cont
                                                        .html("<div>您可能已经离线，请重新刷新网页后再试！</div>");
                                                }
                                                dialog
                                                    .enableButtons(false);
                                                return;

                                            } else {
                                                response = res;
                                            }
                                        } catch (e) {
                                            response = res;
                                        }

                                    }
                                });
                        } else if (showOpt.template) {
                            response = "<div>" + showOpt.template
                                + "</div>";
                        } else {
                            response = "<div></div>";
                        }

                        if (showOpt.data != undefined) {
                            // 只要有数据，就用 artTemplate
                            // 渲染
                            if (showOpt.templateOption != undefined) {
                                if (showOpt.templateOption.helpers) {
                                    for ( var i in showOpt.templateOption.helpers) {
                                        var help = showOpt.templateOption.helpers[i];
                                        if (help) {
                                            template.helper(help.name,
                                                help.action);
                                        }
                                    }
                                }
                            }

                            var tempRes = template.compile(response);
                            var dt = tempRes(showOpt.data);
                            cont.html(dt);

                            if (showOpt.isReadOnly != undefined
                                && showOpt.isReadOnly != null
                                && !showOpt.isReadOnly) {
                                // 编辑模式可以再用js2form填充form数据
                                var rootNode = cont
                                    .find(showOpt.formId)[0];
                                if (rootNode && rootNode != null)
                                    js2form(rootNode, showOpt.data);
                                else
                                    js2form(cont[0], showOpt.data);
                            }
                        } else {
                            cont.html(contTmp[0]);
                        }

                        // form 設置
                        var formOpt = $(showOpt.formId).getFormOpt();
                        if (showOpt.isReadOnly != undefined
                            && showOpt.isReadOnly != null) {

                            if (showOpt.isReadOnly) {
                                if (formOpt.onReadonlyMode != undefined)
                                    formOpt
                                        .onReadonlyMode(showOpt.data);
                            } else {
                                if (formOpt.onModifyMode != undefined)
                                    formOpt.onModifyMode(showOpt.data);
                            }
                        } else {
                            if (formOpt.onCreateMode != undefined)
                                formOpt.onCreateMode(showOpt.data);
                        }

                        if (formOpt.buttons != undefined) {
                            dialogRef.setButtons(formOpt.buttons);
                        }
                    },
                    draggable : true,
                    closeByBackdrop : false,
                    closeByKeyboard : true,
                    buttons : showOpt.buttons
                }, showOpt.dialogOption);

        var dialog = BootstrapDialog.show(opt);
        return dialog;
    },
    postForm : function(showOpt, dialog) {
        dialog.setClosable(false);
        dialog.enableButtons(false);

        var formOpt = $(showOpt.formId).getFormOpt();

        var postform = $(showOpt.formId);
        var validator = postform.validate();

        if (formOpt.preValidDataHandler != undefined) {
            if (formOpt.preValidDataHandler(dialog, validator) != true) {
                dialog.setClosable(true);
                dialog.enableButtons(true);
                return;
            }
        }

        // validator.form();
        if (!postform.valid()) {
            postform.focus();
            $.FORM.show_stack_err_context(dialog.getModalContent(), false, {
                title : "提示",
                text : "该页面还有" + validator.numberOfInvalids() + "个字段包含错误！",
                type : "notice",
                delay : 1500,
                hide : true
            });
            dialog.setClosable(true);
            dialog.enableButtons(true);
            return;
        }

        if (formOpt.preSloveDataHandler != undefined) {
            if (formOpt.preSloveDataHandler(dialog) != true) {
                dialog.setClosable(true);
                dialog.enableButtons(true);
                return;
            }
        }

        var formData;

        if (showOpt.postType) {
            switch (showOpt.postType) {
                case "multipart":
                    formData = new FormData(postform[0]);
                    break;
                case "form":
                    formData = $.param(form2js(postform[0], '.', true,
                        formOpt.formNodeCallback));
                    break;
                case "json":
                    formData = JSON.stringify(form2js(postform[0], '.', true,
                        formOpt.formNodeCallback));
                    break;
                default:
                    return;
            }
        } else {
            formData = form2js(postform[0], '.', true, formOpt.formNodeCallback);
        }

        if (formOpt.prePostDataHandler != undefined) {
            if (formOpt.prePostDataHandler(dialog, formData) != true) {
                dialog.setClosable(true);
                dialog.enableButtons(true);
                return;
            }
        }

        if (showOpt.isDebug != undefined && showOpt.isDebug) {
            var postdata = JSON.stringify(formData);
            alert(postdata);
            dialog.setClosable(true);
            dialog.enableButtons(true);
            return;
        }

        var sendOpt = {
            type : "post",
            async : false,
            url : showOpt.postUrl,
            data : formData,
            dataType : "json",
            success : function(json) {
                if (json.stat == 1) {
                    dialog.close();
                    new PNotify({
                        title : '修改成功！',
                        text : '信息修改成功。',
                        type : 'success',
                        animation : "fade",
                        shadow : true,
                        hide : true,
                        delay : 2000,
                        mobile : {
                            swipe_dismiss : true,
                            styling : true
                        }

                    });
                    if (showOpt.onPostSuccess != undefined)
                        showOpt.onPostSuccess(json.data)
                } else {
                    if (json.code != undefined) {
                        $.FORM.show_code_err(dialog, json);
                    } else {
                        $.FORM.show_sys_err(dialog);
                    }
                }

                dialog.setClosable(true);
                dialog.enableButtons(true);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                var info = "XMLHttpRequest:" + JSON.stringify(XMLHttpRequest)
                    + " ;textStatus:" + textStatus + "; errorThrown:"
                    + JSON.stringify(errorThrown) + "; 【" + showOpt.postUrl
                    + "】";
                console.log("系统错误 【url: " + showOpt.postUrl + "】" + info);
                $.FORM.show_sys_err(dialog, XMLHttpRequest);
                dialog.setClosable(true);
                dialog.enableButtons(true);
            }
        };

        if (showOpt.postType) {
            switch (showOpt.postType) {
                case "multipart":
                    sendOpt.async = false;
                    sendOpt.cache = false;
                    sendOpt.contentType = false;
                    sendOpt.processData = false;
                    break;
                case "form":
                    sendOpt.contentType = 'application/x-www-form-urlencoded';
                    break;
                case "json":
                    sendOpt.contentType = 'application/json';
                    break;
                default:
                    return;
            }
        }

        $.ajax(sendOpt);

    },
    show_sys_err : function(dialog, XMLHttpRequest) {
        var opt = {
            title : "系统错误",
            text : "请您联系管理员!",
            type : "error"
        };
        if (dialog == undefined || dialog == null) {
            new PNotify(opt);
        } else {
            $.FORM.show_stack_err_context(dialog.getModalContent(), false, opt);
        }

    },
    show_code_err : function(dialog, json) {
        var opt;
        if (json.code != undefined && json.code == 1403) {
            $.NOTIFY.showLogin();
            return;
        } else if (json.errorMessages != undefined
            && json.errorMessages != null && json.errorMessages.length > 0) {
            opt = {
                title : "错误",
                text : json.errorMessages[0],
                type : "notice",
                delay : 1500,
                hide : true
            };
        }

        if (dialog == undefined || dialog == null) {
            new PNotify(opt);
        } else {
            $.FORM.show_stack_err_context(dialog.getModalContent(), false, opt)
        }

    },
    show_stack_err_context : function(context, modal, opt) {
        var opts = !opt ? {} : opt;
        opts.stack = modal ? {
            "push" : "top",
            "dir1" : "down",
            "dir2" : "left",
            "context" : context,
            "modal" : true,
            "overlay_close" : true
        } : {
            "push" : "top",
            "dir1" : "down",
            "dir2" : "left",
            "context" : context
        };
        opts.addclass = "stack-modal";
        new PNotify(opts);
    }
}