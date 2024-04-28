<?php
/**
 * DokuWiki Plugin copypage (Action Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  orangain <orangain@gmail.com>
 */

// must be run within Dokuwiki
if (!defined('DOKU_INC')) {
    die();
}

class action_plugin_copypage extends DokuWiki_Action_Plugin
{

    /**
     * Registers a callback function for a given event
     *
     * @param Doku_Event_Handler $controller DokuWiki's event controller object
     * @return void
     */
    public function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('COMMON_PAGETPL_LOAD', 'BEFORE', $this, 'get_template');
        // since 2017-09-01
        $controller->register_hook('MENU_ITEMS_ASSEMBLY', 'AFTER', $this, 'add_menu_item', array());
        // DEPRECATED since 2017-09-01
        $controller->register_hook('TEMPLATE_PAGETOOLS_DISPLAY', 'BEFORE', $this, 'add_tool_button');
    }

    /**
     * Handler to load page template.
     *
     * @param Doku_Event $event  event object by reference
     * @param mixed      $param  [the parameters passed as fifth argument to register_hook() when this
     *                           handler was registered]
     * @return void
     */
    public function get_template(Doku_Event &$event, $param)
    {
        if (strlen($_REQUEST['copyfrom']) > 0) {
            $template_id = $_REQUEST['copyfrom'];
            if (auth_quickaclcheck($template_id) >= $this->get_permission_level()) {
                $tpl = io_readFile(wikiFN($template_id));
                if ($this->getConf('replaceid')) {
                    $id = $event->data['id'];
                    $tpl = str_replace($template_id, $id, $tpl);
                }
                $event->data['tpl'] = $tpl;
                $event->preventDefault();
            }
        }
    }

    /**
     * (DEPRECATED since 2017-09-01) Handler to add page tools.
     *
     * @param Doku_Event $event  event object by reference
     * @param mixed      $param  [the parameters passed as fifth argument to register_hook() when this
     *                           handler was registered]
     * @return void
     */
    public function add_tool_button(Doku_Event &$event, $param)
    {
        $event->data['items']['copypage'] = '<li>' .
        '<a href="#" class="action copypage copypageplugin__copy" rel="nofollow">' .
        '<span>' .
        $this->getLang('copypage') .
            '</span>' .
            '</a>' .
            '</li>';
    }

    /**
     * Handler to add menu item (since 2017-09-01).
     *
     * @param Doku_Event $event  event object
     * @return void
     */
    public function add_menu_item(Doku_Event $event)
    {
        if (isset($ID) && auth_quickaclcheck($ID) >= $this->get_permission_level()) {
            if ($event->data['view'] != 'page') {
                return;
            }
            array_splice($event->data['items'], -1, 0, [new \dokuwiki\plugin\copypage\MenuItem()]);
        }
    }

    /**
     * Get Permission Level from config
     *
     * @return void
     */
    private function get_permission_level()
    {
        if ($this->getConf('onlyforauthedit')) {
            return AUTH_EDIT;
        }
        return AUTH_READ;
    }

}
