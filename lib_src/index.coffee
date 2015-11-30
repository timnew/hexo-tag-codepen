# {% codepen userId|anonymous|anon slugHash theme [defaultTab [height [width]]] %}
module.exports = (args, content) ->
  
  htmlTag = require('hexo-util').htmlTag;
  
  userId = if args[0] is 'anonymous' then 'anon' else args[0]
  slugHash = args[1]
  theme = args[2]
  defaultTab = args[3] ? 'result'
  height = args[4] ? 300
  width = args[5] ? '100%'

  url = "//codepen.io/#{userId}/embed/#{slugHash}?height=#{height}&theme-id=#{theme}&slug-hash=#{slugHash}&default-tab=#{defaultTab}"
  params =
    id: "cp_embed_#{slugHash.replace("/", "_")}"
    src: url
    scrolling: "no"
    frameborder: "0"
    height: height
    allowTransparency: "true"
    allowfullscreen: "true"
    "class": "cp_embed_iframe"
    style: "width: #{width}; overflow: hidden;"

  htmlTag 'iframe', params, ''