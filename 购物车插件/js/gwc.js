;(function($){
	$.gwc=function(opt){
		new Gwc(opt)
	}
	function Gwc(opt){
		//创建默认参数 扩展参数
		this.opt=$.extend({},{
			min:0,//最少购买数量
			val:1,//默认数量
			max:100,//最多购买数量
			wrap:null,
			step:1,//步长
			callback:null
		},opt);
		//功能：创建结构+css+Js
		var htmlNode=$("<div class='gwc'>"
			+"<input type='text' readonly>"
			+"<span class='add'>+</span><span class='sub'>-</span>"
			+"</div>"),
		input=htmlNode.find("input"),
		add=htmlNode.find(".add"),
		sub=htmlNode.find(".sub"),
		_this=this;
		htmlNode.prependTo(this.opt.wrap);
		//设置默认数
		input.val(this.opt.val);
		//点击加或减执行相应的动作
		add.on("click",function(){
			var result=input.val()*1+_this.opt.step;
			if(result>_this.opt.max) return false;
			input.val(result);
			_this.opt.callback&&_this.opt.callback(result);
		})
		sub.on("click",function(){
			var result=input.val()-_this.opt.step;
			if(result<_this.opt.min) return false;
			input.val(result);
			_this.opt.callback&&_this.opt.callback(result);
		})
	}
})(jQuery)