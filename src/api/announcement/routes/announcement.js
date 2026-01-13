'use strict';

/**
 * announcement router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/announcement',
      handler: 'announcement.find',
      config: {
        auth: false, // Public access
      },
    },
    {
      method: 'PUT',
      path: '/announcement',
      handler: 'announcement.update',
    },
    {
      method: 'DELETE',
      path: '/announcement',
      handler: 'announcement.delete',
    },
  ],
};
