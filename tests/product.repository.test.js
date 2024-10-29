import { ProductRepository } from "../src/products/product.repository.js"

describe(`Product Repository`, () => {
    it(`Should create an instance`, () => {
        const repository = new ProductRepository()
        expect(repository).toBeInstanceOf(ProductRepository)
    })

    it(`Should get back an array when findAll is called`, () => {
        const repository = new ProductRepository()
        const products = repository.findAll()
        expect(Array.isArray(products)).toBe(true)
    })

    it (`Should return a product with ref '0001'`, () => {
        const repository = new ProductRepository()
        const product = repository.findOne('0001')
        expect(product.ref).toBe('0001')
    })

    it (`Should throw an Error if product was not found`, () => {
        const repository = new ProductRepository()
        expect(() => repository.findOne('0004')).toThrow()
    })
})