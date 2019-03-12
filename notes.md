Need to look into learning xPath

###### Example
https://www.instagram.com/p/Bu0LsB4BPwd8X1CgREimIiD-dAYZdtldOyk21c0/liked_by/

PostPage[""0""].graphql.shortcode_media.edge_media_preview_like.edges[""0""].node

PostPage[""0""].graphql.shortcode_media.edge_media_preview_like.edges[""0""].node

window._sharedData.entry_data.PostPage[0].media.likes.nodes.forEach(x=>console.log(x.user.username))


window._sharedData.entry_data`