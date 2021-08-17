
const {getProductsById, getProducts} = require('../../services/product.service');

const buildOptions = (params) => {
  const options = {};
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

const productsRouteController = async (ctx) => {
  if ( ctx.request.query && ctx.request.query.searchParam) {
    const { searchParam, page, perPage } = ctx.request.query
    const options = buildOptions({ page, perPage })
    if (isNaN(searchParam) && searchParam.length >= 3) {
      const productsData = await getProducts( searchParam, options)
      if (productsData.totalDocs > 0) {
        ctx.body = productsData
      } else {
        ctx.body = 'there is not matches';
      }
    } else if (!isNaN(searchParam)) {
      const productsData = await getProductsById(Number(searchParam))
      if (productsData._doc) {
        ctx.body = productsData
      } else {
        ctx.body = 'there is not matches';
      }
    } else {
      ctx.status = 400;
      console.log('search param error!')
    }
  } else {
    ctx.status = 400;
    console.log('there was an error!');
  }
}

module.exports = {productsRouteController}