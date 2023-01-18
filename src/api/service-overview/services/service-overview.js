'use strict';

/**
 * service-overview service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-overview.service-overview');
