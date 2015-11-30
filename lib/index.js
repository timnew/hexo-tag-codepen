module.exports = function(args, content) {
  var defaultTab, height, htmlTag, params, ref, ref1, ref2, slugHash, theme, url, userId, width;
  htmlTag = require('hexo-util').htmlTag;
  userId = args[0] === 'anonymous' ? 'anon' : args[0];
  slugHash = args[1];
  theme = args[2];
  defaultTab = (ref = args[3]) != null ? ref : 'result';
  height = (ref1 = args[4]) != null ? ref1 : 300;
  width = (ref2 = args[5]) != null ? ref2 : '100%';
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
