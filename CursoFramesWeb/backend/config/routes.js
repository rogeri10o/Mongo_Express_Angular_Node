const express = require('express')

module.exports = function(server) {
  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingCycle/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
