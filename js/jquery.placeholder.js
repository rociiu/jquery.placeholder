(function($) {
	$.fn.placeholder = function(opt) {
		
		var options = $.extend({}, $.fn.placeholder.defaultOptions, opt);
		
		return this.each(function(){
			setHolder($(this), options);

			$(this).blur(function(){
				if($(this).val() == '')
				{
					setHolder($(this), options);
				}
			});

			$(this).focus(function(){
				if($(this).val() == options.message) {
					$(this).val('');
				}
				$(this).removeClass(options.style);
			})
		});
	};
	
	function setHolder(obj, opts) {
		obj.val(opts.message);
		obj.addClass(opts.style);
	}
	
	$.fn.placeholder.defaultOptions = {
		message: "click to enter..",
		style: "placeholder"
	}
	
})(jQuery);

jQuery.log = function(message) {
  if(window.console) {
     console.debug(message);
  } else {
     alert(message);
  }
};
