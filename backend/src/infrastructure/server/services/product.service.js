const productScheme = require('../../db/models/product.model')

const isPalindrome = str => {
  const regex = /[\W_]/g
  const cleanStr = str.toLowerCase().replace(regex, '')
  const reverseStr = cleanStr.split('').reverse().join('')
  return reverseStr === cleanStr
}

const getProducts = async (searchParam, options = {page: 1, perPage: 5}) => {
  let resultDocs = await productScheme.paginate({
      $or: [
        { brand: {$regex: searchParam, $options: 'i'} },
        { description: {$regex: searchParam, $options: 'i'} }
      ],
    },
    options,
  )
  if (isPalindrome(searchParam) && resultDocs.totalDocs > 0) {
    resultDocs.docs.forEach(doc => doc._doc.discount = 0.5)
  }
  return resultDocs
}
const getProductsById = async id => {
  console.log('options by id: ' + id)
  const resultDocs = await productScheme.findOne({id})
  console.log(resultDocs)
  return resultDocs
}

module.exports = {getProducts, getProductsById}
