const productScheme = require('../../db/models/product.model')

const isPalindrome = str => {
  const regex = /[\W_]/g
  const cleanStr = str.toLowerCase().replace(regex, '')
  const reverseStr = cleanStr.split('').reverse().join('')
  return reverseStr === cleanStr
}

const getProducts = async (searchParam, options) => {
  let resultDocs
  let query = {}
  if (searchParam) {
    query = {
      $or: [
        { brand: {$regex: searchParam, $options: 'i'} },
        { description: {$regex: searchParam, $options: 'i'} }
      ],
    }
  }
  resultDocs = await productScheme.paginate( query, options)
  if (searchParam && isPalindrome(searchParam) && resultDocs.totalDocs > 0) {
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
