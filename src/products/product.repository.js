import {products} from './../../datas/product.js'

export class ProductRepository {

    findAll() {
        return products
    }

    /**
     * 
     * @param {string} ref 
     * @returns Product
     * @throws Error if ref was not found
     */
    findOne(ref) {
        const product = products.find((productRef) => productRef.ref === ref)
        if (product === undefined) {
            throw new Error(`Product with ref ${ref} was not found`)
        }

        return product
    }
}