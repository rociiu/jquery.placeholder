(function($) {
	$.fn.placeholder = function(opt) {

		var options = $.extend({}, $.fn.placeholder.defaultOptions, opt);

		return this.each(function(){
			var $item = $(this);

			if ($item.val() == '') {
			  setHolder($item, options);
			}

			$item.blur(function(){
				if($item.val() == '') {
					setHolder($item, options);
				}
			});

			$item.focus(function(){
				if($item.val() == ($item.attr("placeholder") || options.message)) {
					$item.val('');
				}
				$item.removeClass(options.style);
			});

			$item.parents("form:first").submit(function(){
				if($item.val() == ($item.attr("placeholder") || options.message)) {
					$item.val('');
				}
			})
		});
	};

	function setHolder(obj, opts) {
		obj.val(obj.attr("placeholder") || opts.message);
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
