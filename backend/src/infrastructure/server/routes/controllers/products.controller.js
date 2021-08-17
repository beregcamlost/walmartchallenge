const {getProductsById, getProducts} = require('../../services/product.service')

const buildOptions = params => {
  const options = { page: 1, perPage: 10 }
  const page = Number(params.page)
  const perPage = Number(params.perPage)
  try {
    if (!isNaN(page)) {
      options.page = page
    } else console.log('error with the page')

    if (!isNaN(perPage)) {
      options.perPage = perPage
    } else console.log('error with the perPage')
  } catch (error) {
    console.log(error)
  }
  return options
}

const productsRouteController = async ctx => {
  const {searchParam, page, perPage} = ctx.request.query
  const options = buildOptions({page, perPage})
  if (ctx.request.query && ctx.request.query.searchParam) {
    if (isNaN(searchParam) && searchParam.length >= 3) {
      const productsData = await getProducts(searchParam, options)
      if (productsData.totalDocs > 0) {
        ctx.body = productsData
      } else {
        ctx.body = 'there is not matches'
      }
    } else if (!isNaN(searchParam)) {
      const productsData = await getProductsById(Number(searchParam))
      if (productsData._doc) {
        ctx.body = productsData
      } else {
        ctx.body = 'there is not matches'
      }
    } else {
      ctx.status = 400
      console.log('search param error!')
    }
  } else {
    const productsData = await getProducts(searchParam, options)
    if (productsData.totalDocs > 0) {
      ctx.body = productsData
    } else {
      ctx.body = 'there is not matches'
    }
  }
}

module.exports = {productsRouteController}
