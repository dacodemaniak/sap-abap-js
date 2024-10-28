export const products = [
    {
        ref: '0001',
        label: 'Nut',
        movements: [
            {
                date: new Date(2024, 9, 20),
                input: true,
                quantity: 250,
                price: 0.35
            },
            {
                date: new Date(2024, 9, 19),
                input: false,
                quantity: 30,
                price: 0.50
            },
            {
                date: new Date(2024, 8, 29),
                input: true,
                quantity: 80,
                price: 0.29
            }
        ]
    },
    {
        ref: '0002',
        label: 'Screw',
        movements: [
            {
                date: new Date(2024, 9, 20),
                input: true,
                quantity: 150,
                price: 0.32
            },
        ]
    },
    {
        ref: '0003',
        label: 'Counter nut',
        movements: [
            {
                date: new Date(2024, 9, 20),
                input: true,
                quantity: 10000,
                price: 0.02
            },
            {
                date: new Date(2024, 9, 19),
                input: false,
                quantity: 1000,
                price: 0.05
            },
            {
                date: new Date(2024, 8, 29),
                input: true,
                quantity: 3000,
                price: 0.02
            }
        ]
    }
]