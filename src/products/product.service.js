import { ProductRepository } from "./product.repository.js"

export class ProductService {
    #repository = null

    constructor() {
        this.#repository = new ProductRepository
    }

    /**
     * @returns Array of Product
     */
    findAll() {
        return this.#repository.findAll()
    }

    /**
     * 
     * @param {string} ref Reference of the product to return
     * @returns Product
     * @throws Error if Reference was not found
     */
    findOne(ref) {
        try {
            return this.#repository.findOne(ref)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}