/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Dec 2 15:19
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/overlay
*/

KISSY.add("editor/plugin/overlay", ["editor", "overlay", "./focus-fix"], function(S, require) {
  var Editor = require("editor");
  var Overlay = require("overlay");
  var focusFix = require("./focus-fix");
  return Overlay.extend({bindUI:function() {
    focusFix.init(this)
  }}, {ATTRS:{prefixCls:{value:"ks-editor-"}, zIndex:{value:Editor.baseZIndex(Editor.ZIndexManager.OVERLAY)}}})
});

