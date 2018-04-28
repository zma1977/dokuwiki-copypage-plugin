jQuery(function() {
  var copyThisPage = function() {
    var oldId = JSINFO.id;
    while (true) {
      var newId = prompt(LANG.plugins.copypage.enter_page_id, oldId);
      // Note: When a user canceled, most browsers return the null, but Safari returns the empty string
      if (newId) {
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

  // Handle click of desktop menu.
  jQuery('.copypageplugin__copy').click(function(e) {
    e.preventDefault();
    copyThisPage();
  });

  // Add a menu item to the "Page Tools" group of the mobile menu.
  // No longer needed for new menu system since 2017-09-01.
  if (jQuery('select.quickselect option[value="copypageplugin__copy"]').length == 0) {
    jQuery('select.quickselect optgroup:nth-of-type(1)').append(
      jQuery('<option value="copypageplugin__copy">').text(jQuery('.copypageplugin__copy').text()));
  }

  // Dirty hack to handle selection of mobile menu.
  // See: https://github.com/splitbrain/dokuwiki/blob/release_stable_2018-04-22/lib/scripts/behaviour.js#L102-L115
  jQuery('select.quickselect')
    .unbind('change')  // Remove dokuwiki's default handler to override its behavior
    .change(function(e) {
      if (e.target.value != 'copypageplugin__copy') {
        // do the default action
        e.target.form.submit();
        return;
      }

      e.target.value = '';  // Reset selection to enable re-select when a prompt is canceled
      copyThisPage();
    });
});
