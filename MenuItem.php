<?php

namespace dokuwiki\plugin\copypage;

use dokuwiki\Menu\Item\AbstractItem;

/**
 * Class MenuItem
 *
 * Implements the Copy this page button for DokuWiki's menu system
 *
 * @package dokuwiki\plugin\copypage
 */
class MenuItem extends AbstractItem {

    /** @var string do action for this plugin */
    protected $type = 'copypageplugin__copy';

    /** @var string icon file */
    protected $svg = __DIR__ . '/images/content-copy.svg';

    /**
     * Get label from plugin language file
     *
     * @return string
     */
    public function getLabel() {
        $plugin = plugin_load('action', 'copypage');
        return $plugin->getLang('copypage');
    }
}
