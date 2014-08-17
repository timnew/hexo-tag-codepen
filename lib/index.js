(function() {
  var codepenTagRender, htmlTag;

  htmlTag = hexo.util.html_tag;

  codepenTagRender = function(args, content) {
    var defaultTab, height, params, slugHash, theme, url, userId, width, _ref, _ref1, _ref2;
    userId = args[0] === 'anonymous' ? 'anon' : args[0];
    slugHash = args[1];
    theme = args[2];
    defaultTab = (_ref = args[3]) != null ? _ref : 'result';
    height = (_ref1 = args[4]) != null ? _ref1 : 300;
    width = (_ref2 = args[5]) != null ? _ref2 : '100%';
    url = "//codepen.io/" + userId + "/embed/" + slugHash + "?height=" + height + "&theme-id=" + theme + "&slug-hash=" + slugHash + "&default-tab=" + defaultTab;
    params = {
      id: "cp_embed_" + (slugHash.replace("/", "_")),
      src: url,
      scrolling: "no",
      frameborder: "0",
      height: height,
      allowTransparency: "true",
      allowfullscreen: "true",
      "class": "cp_embed_iframe",
      style: "width: " + width + "; overflow: hidden;"
    };
    return htmlTag('iframe', params, '');
  };

  hexo.extend.tag.register('codepen', codepenTagRender);

  module.exports = codepenTagRender;

}).call(this);
