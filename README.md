#Umbraco robots meta tag property editor
=======================================

![alt text](https://github.com/mikkelhm/Umbraco-robots-meta-tag-property-editor/blob/master/markdown/screenshot.png "Screenshot from Umbraco")
_above is a screenshot from an Umbraco 7.2.1 installation where the editor is used as datatype for a property called "robots"_

This is a simple property editor, which allows the editor to change the content of the meta tag "robots".

It is currently made to have 3 different values, noodp is added all of the time, 
but it can be removed from the controller if needed.

the tree values are

* index,follow,noopd
* noindex,follow,noopd
* noindex,nofollow,noopd

With these tree values, the editor should be able to optimize for the searchengines. 
This package only contains the property editor, the implementor has to add a property to a document with the new datatype, 
and add the value to their templates. This could be done simply by adding a field to their master tempaltes like this:
```
<meta name="robots" content="@Umbraco.Field("robotsMetaTag", recursive: true)" />
```
For the above code to be meaningfull, add the property to atleast your home node, 
and set the appropriate value(probably index, follow, noopd). 
This will ensure that the tag is written out on all pages, with a proper content. 


The editor is testet in Umbraco 7.2.1, but ***SHOULD*** work in all that supports the new Angular UI(Belle, 7.0+))
