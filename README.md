Copy Page Plugin for DokuWiki
=============================

Create a new page from an existing page.

![Screenshot of Copy Page Plugin](https://raw.githubusercontent.com/orangain/dokuwiki-copypage-plugin/master/images/screenshot.png)

All documentation for this plugin can be found at
https://www.dokuwiki.org/plugin:copypage

If you install this plugin manually, make sure it is installed in
`lib/plugins/copypage/` - if the folder is called different it
will not work!

Please refer to http://www.dokuwiki.org/plugins for additional info
on how to install plugins in DokuWiki.

For Developers
--------------

You can launch a DokuWiki instance with the copypage plugin in your current directory by [docker](https://www.docker.com/). Thanks [mprasil](https://hub.docker.com/r/mprasil/dokuwiki/)!

```
$ docker run --rm -v `pwd`:/dokuwiki/lib/plugins/copypage -p 80:80 mprasil/dokuwiki:2015-08-10a
```

Then navigate to `http://<YOUR DOCKER HOST>/`.

The version of dokuwiki can be specified by [tags](https://hub.docker.com/r/mprasil/dokuwiki/tags/).

### Tips for debugging

* If you need some configuration of DokuWiki, navigate to `http://<YOUR DOCKER HOST>/install.php` to setup your instance.
* Disabling [compress](https://www.dokuwiki.org/config:compress) option will help debugging JavaScript.

License
-------

Copyright (C) orangain <orangain@gmail.com>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; version 2 of the License

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

See the COPYING file in your DokuWiki folder for details
