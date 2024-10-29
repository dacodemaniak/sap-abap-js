import { ProductService } from "../src/products/product.service.js"

describe(`Product Service`, () => {
    it (`Should create an instance`, () => {
        const service = new ProductService()
        expect(service).toBeInstanceOf(ProductService)
    })

    it (`Should return an array when calling findAll method`, () => {
        const service = new ProductService()
        expect(Array.isArray(service.findAll())).toBe(true)
    })

    it (`Shoud return a product Object when calling findOne`, () => {
        const service = new ProductService()
        const product = service.findOne('0001')
        expect(product.ref).toBe('0001')
    })

    it (`Should raised an error if product was not found`, () => {
        const service = new ProductService()
        expect(() => service.findOne('0004')).toThrow()
    })
})