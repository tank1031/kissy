/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Dec 2 15:19
*/
KISSY.add("editor/plugin/overlay",["editor","overlay","./focus-fix"],function(e,a){var b=a("editor"),c=a("overlay"),d=a("./focus-fix");return c.extend({bindUI:function(){d.init(this)}},{ATTRS:{prefixCls:{value:"ks-editor-"},zIndex:{value:b.baseZIndex(b.ZIndexManager.OVERLAY)}}})});
