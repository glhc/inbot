Need to look into learning xPath

###### Example
https://www.instagram.com/p/Bu0LsB4BPwd8X1CgREimIiD-dAYZdtldOyk21c0/liked_by/

PostPage[""0""].graphql.shortcode_media.edge_media_preview_like.edges[""0""].node

PostPage[""0""].graphql.shortcode_media.edge_media_preview_like.edges[""0""].node

_window._sharedData.entry_data_

- session - a way to get an object which is a running session of instapy
- follow_likers - closes thing to the functionality we want
- There is some valuable xPath strings in the code, need to keep searching.

###### Get photo links from user page

```python
		def get_photo_urls_from_profile(browser, username, links_to_return_amount=1,
		                                randomize=True):
		    # try:
		    # input can be both username or user profile url
		    username = username_url_to_username(username)
		    print("\nGetting likers from user: ", username, "\n")
		    web_address_navigator(browser,
		                          'https://www.instagram.com/' + username + '/')
		    sleep(1)

		    photos_a_elems = browser.find_elements_by_xpath("//div/a")

		    links = []
		    for photo_element in photos_a_elems:
		        photo_url = photo_element.get_attribute("href")
		        # print ("photo url: ", photo_url)
		        if ("/p/" in photo_url):
		            links.append(photo_url)
```

