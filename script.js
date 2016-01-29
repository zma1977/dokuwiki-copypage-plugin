jQuery(function() {
  var copyThisPage = function() {
    var oldId = JSINFO.id;
    while (true) {
      var newId = prompt(LANG.plugins.copypage.enter_page_id, oldId);
      if (newId !== null) {
        if (newId === oldId) {
          alert(LANG.plugins.copypage.different_id_required);
          continue;
        }

        var url = DOKU_BASE + 'doku.php?id=' + encodeURIComponent(newId) +
          '&do=edit&copyfrom=' + encodeURIComponent(oldId);
        location.href = url;
      }
      break;
    }
  };

  // Handle desktop menu
  jQuery('.copypageplugin__copy').click(function(e) {
    e.preventDefault();
    copyThisPage();
  });

  // Add a menu item to the "Page Tools" group of the mobile menu
  jQuery('select.quickselect optgroup:nth-of-type(1)').append(
    jQuery('<option value="copypage">').text(jQuery('.copypageplugin__copy').text()));

  // Handle mobile menu
  jQuery('select.quickselect')
    .unbind('change')  // Remove dokuwiki's default handler to override its behavior
    .change(function(e) {
      if (e.target.value != 'copypage') {
        // do the default action
        e.target.form.submit();
        return;
      }

      e.target.value = '';  // Reset selection to enable re-select when a prompt is canceled
      copyThisPage();
    });
});
