jQuery(function() {
  jQuery('#dokuwiki__copytonewpage').click(function(e) {
    e.preventDefault();
    var oldId = JSINFO.id;
    while (true) {
      var newId = prompt(LANG.plugins.copytonewpage.enter_page_id, oldId);
      if (newId !== null) {
        if (newId === oldId) {
          alert(LANG.plugins.copytonewpage.different_id_required);
          continue;
        }

        var url = 'doku.php?id=' + encodeURIComponent(newId) + '&do=edit&copyfrom=' + encodeURIComponent(oldId);
        location.href = url;
      }
      break;
    }
  });
});
