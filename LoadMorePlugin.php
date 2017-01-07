<?php
/**
 * Load more plugin for Craft CMS
 *
 * Loads more entries on button click and adds below
 *
 * @author    Craig Horsborough
 * @copyright Copyright (c) 2017 Craig Horsborough
 * @link      www.ghostwhite.net
 * @package   LoadMore
 * @since     1.0.0
 */

namespace Craft;

class LoadMorePlugin extends BasePlugin
{
    /**
     * @return mixed
     */
    public function init()
    {
    }

    /**
     * @return mixed
     */
    public function getName()
    {
         return Craft::t('Load more');
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return Craft::t('Loads more entries on button click and adds below');
    }

    /**
     * @return string
     */
    public function getDocumentationUrl()
    {
        return 'https://github.com/craigh44/loadmore/blob/master/README.md';
    }

    /**
     * @return string
     */
    public function getReleaseFeedUrl()
    {
        return 'https://raw.githubusercontent.com/craigh44/loadmore/master/releases.json';
    }

    /**
     * @return string
     */
    public function getVersion()
    {
        return '1.0.0';
    }

    /**
     * @return string
     */
    public function getSchemaVersion()
    {
        return '1.0.0';
    }

    /**
     * @return string
     */
    public function getDeveloper()
    {
        return 'Craig Horsborough';
    }

    /**
     * @return string
     */
    public function getDeveloperUrl()
    {
        return 'www.ghostwhite.net';
    }

    /**
     * @return bool
     */
    public function hasCpSection()
    {
        return false;
    }

    /**
     * @return mixed
     */
    public function addTwigExtension()
    {
        Craft::import('plugins.loadmore.twigextensions.LoadMoreTwigExtension');

        return new LoadMoreTwigExtension();
    }

    /**
     */
    public function onBeforeInstall()
    {
    }

    /**
     */
    public function onAfterInstall()
    {
    }

    /**
     */
    public function onBeforeUninstall()
    {
    }

    /**
     */
    public function onAfterUninstall()
    {
    }
}