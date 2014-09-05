jQuery(function() {
  jQuery('#dokuwiki__copytonewpage').click(function(e) {
    e.preventDefault();
    var oldId = JSINFO.id;
    var newId = prompt('Enter new page id', oldId);
    if (newId !== null) {
      var url = 'doku.php?id=' + encodeURIComponent(newId) + '&do=edit&copyfrom=' + encodeURIComponent(oldId);
      location.href = url;
    }
  });
});
