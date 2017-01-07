<?php
/**
 * Load more plugin for Craft CMS
 *
 * Load more Twig Extension
 *
 * @author    Craig Horsborough
 * @copyright Copyright (c) 2017 Craig Horsborough
 * @link      www.ghostwhite.net
 * @package   LoadMore
 * @since     1.0.0
 */

namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class LoadMoreTwigExtension extends \Twig_Extension
{
    /**
     * @return string The extension name
     */
    public function getName()
    {
        return 'LoadMore';
    }

    /**
     * @return array
     */
    public function getFilters()
    {
        return array(
            'loadMore' => new \Twig_Filter_Method($this, 'loadMore'),
        );
    }

    /**
    * @return array
     */
    public function getFunctions()
    {
        return array(
            'someFunction' => new \Twig_Function_Method($this, 'someInternalFunction'),
        );
    }

    /**
     * @return string
     */
    public function loadMore($paginate)
    {
        $script = "var nextUrl = '" .  $paginate->getNextUrl() . "';";
        craft()->templates->includeJs($script);
        $content = craft()->templates->includeJsResource('loadmore/js/load-more.js');
    }
}
