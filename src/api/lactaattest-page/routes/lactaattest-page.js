'use strict';

/**
 * lactaattest-page router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/lactaattest-page',
      handler: 'lactaattest-page.find',
      config: {
        auth: false, // Public access
      },
    },
    {
      method: 'PUT',
      path: '/lactaattest-page',
      handler: 'lactaattest-page.update',
    },
    {
      method: 'DELETE',
      path: '/lactaattest-page',
      handler: 'lactaattest-page.delete',
    },
  ],
};
