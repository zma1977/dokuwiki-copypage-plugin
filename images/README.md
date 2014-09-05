How to build pagetools-sprite.png
=================================

```sh
cd /path/to/dokuwiki-plugin-copytonewpage
ln -s $DOKUWIKI/lib/tpl/dokuwiki/style.ini .
cd images
php $DOKUWIKI/lib/tpl/dokuwiki/images/pagetools-build.php
```

This will generate `pagetools-sprite.png`.
