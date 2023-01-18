'use strict';

/**
 * blog-overview service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-overview.blog-overview');
