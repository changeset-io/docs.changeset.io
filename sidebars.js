/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: 'category',
      label: 'Get Started',
        items: ['get-started/welcome', 'get-started/connect', 'get-started/new-repo', 'get-started/create-a-workflow'],
    },
    {
      type: 'category',
      label: 'Reference',
        items: ['reference/events', 'reference/attributes'],
    },
  ],
};

module.exports = sidebars;
