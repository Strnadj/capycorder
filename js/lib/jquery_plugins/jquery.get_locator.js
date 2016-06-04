// Generated by CoffeeScript 1.10.0
(function() {
  var helpers, methods;

  methods = {
    id: function($el) {
      var id;
      if ((id = $el.attr('id')) != null) {
        return id;
      } else {
        return null;
      }
    },
    name: function($el) {
      var name;
      if ((name = $el.attr('name')) != null) {
        return name;
      } else {
        return null;
      }
    },
    label: function($el) {
      var $label;
      if (($label = helpers.findLabelForInput($el)) != null) {
        return $.trim($label.text());
      } else {
        return null;
      }
    },
    text: function($el) {
      var text;
      if ((text = $.trim($el.text())).length) {
        return text;
      } else {
        return null;
      }
    },
    value: function($el) {
      var value;
      if ((value = $.trim($el.val())).length) {
        return value;
      } else {
        return null;
      }
    },
    imgAlt: function($el) {
      var $img;
      $img = $el.find('img:first');
      if ($img.length) {
        return $img.attr('alt');
      } else {
        return null;
      }
    }
  };

  helpers = {
    findLabelForInput: function($input) {
      var $label;
      $label = $("label[for=" + ($input.attr('id')) + "]");
      if (!$label.length) {
        $label = $input.closest('label');
      }
      if ($label.length) {
        return $label;
      } else {
        return null;
      }
    }
  };

  $.fn.extend({
    getLocator: function(preferredMethods) {
      return _.compact(_.map(preferredMethods, (function(_this) {
        return function(method) {
          return methods[method](_this);
        };
      })(this)))[0];
    }
  });

}).call(this);
