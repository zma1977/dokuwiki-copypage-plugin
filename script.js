jQuery(function() {
  jQuery('#dokuwiki__copytonewpage').click(function(e) {
    e.preventDefault();
    var oldId = JSINFO.id;
    while (true) {
      var newId = prompt("Enter new-page's ID.", oldId);
      if (newId !== null) {
        if (newId === oldId) {
          alert('You must enter a different ID from current page');
          continue;
        }

        var url = 'doku.php?id=' + encodeURIComponent(newId) + '&do=edit&copyfrom=' + encodeURIComponent(oldId);
        location.href = url;
      }
      break;
    }
  });
});
