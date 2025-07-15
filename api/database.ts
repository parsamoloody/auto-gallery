import { Brands, CaTegory, Entity, Product, Repository } from '@/types/type'
// categories
import sedan from '../public/assets/svg/uni1.svg'
import cabriolet from '../public/assets/svg/uni2.svg'
import coupe from '../public/assets/svg/uni3.svg'
import suv from '../public/assets/svg/uni4.svg'
import micro from '../public/assets/svg/uni5.svg'
import categoryCover1 from '../public/assets/images/cover-g-1.png'
// Products
import p1 from '../public/assets/images/p-1.jpg'
import p2 from '../public/assets/images/p-2.jpg'
import p3 from '../public/assets/images/p-3.jpg'
import p4 from '../public/assets/images/p-4.jpg'

const brands: Brands[] = [{
    id: '0',
    name: 'Rolls Royce Wraith',
    category: ['0'],
    image: {
        url: categoryCover1,
    }
},
{
    id: '1',
    name: 'BMW',
    category: ['1'],
    image: {
        url: categoryCover1
    }
},
{
    id: '2',
    name: 'Ferrari',
    category: ['1', '2'],
    image: {
        url: categoryCover1
    }
},
{
    id: '3',
    name: 'Rolls Royce',
    category: ['1'],
    image: {
        url: categoryCover1
    }
},
{
    id: '4',
    name: 'Audi',
    category: ['2'],
    image: {
        url: categoryCover1
    }
},
{
    id: '5',
    name: 'Tesla',
    category: ['1', '3'],
    image: {
        url: categoryCover1
    }
},
{
    id: '6',
    name: 'Lamborghini',
    category: ['1', '4'],
    image: {
        url: categoryCover1
    }
},
{
    id: '7',
    name: 'Mercedes-Benz',
    category: ['1', '5'],
    image: {
        url: categoryCover1
    }
}
]

const categories: CaTegory[] = [{
    id: '0',
    catName: 'Sedan',
    imageUrl: sedan,
    coverUrl: categoryCover1
},
{
    id: '1',
    catName: 'Cabriolet',
    imageUrl: cabriolet,
    coverUrl: categoryCover1
},
{
    id: '2',
    catName: 'Coupe',
    imageUrl: coupe,
    coverUrl: categoryCover1
},
{
    id: '3',
    catName: 'SUV',
    imageUrl: suv,
    coverUrl: categoryCover1
}, {
    id: '4',
    catName: 'Micro',
    imageUrl: micro,
    coverUrl: categoryCover1
}
]

const products: Product[] = [
    {
        id: '0',
        category: '0',
        content: [{
            name: "Ferrari",
            description: "Loorm Ipsum",
            isNew: true,
            price: {
                rent: 78000,
                discount: 0
            },
            inStock: true,
            images: [p1]
        },
        {
            name: "Bmw",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p2],
            inStock: true,
            isNew: true,
        },
        {
            name: "rolls Roys",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p3],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p4],
            inStock: true,
            isNew: true,
        }]
    },
    {
        id: '1',
        category: '1',
        content: [{
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 13
            },
            images: [p1],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 4
            },
            images: [p2],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p3],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p4],
            inStock: true,
            isNew: true,
        }]
    },
    {
        id: '2',
        category: '2',
        content: [{
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p1],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 2
            },
            images: [p2],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p3],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p4],
            inStock: true,
            isNew: true,
        }]
    },
    {
        id: '3',
        category: '3',
        content: [{
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p1],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 9
            },
            images: [p2],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p3],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p4],
            inStock: true,
            isNew: true,
        }]
    },
    {
        id: '4',
        category: '4',
        content: [{
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p1],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p2],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p3],
            inStock: true,
            isNew: true,
        },
        {
            name: "Ferrari",
            description: "Loorm Ipsum",
            price: {
                rent: 78000,
                discount: 0
            },
            images: [p4],
            inStock: true,
            isNew: true,
        }]
    }
]


function createRepository<T extends Entity>(data: T[]): Repository<T> {
    return {
        async findMany() {
            return data;
        },
        async findById(id: string) {
            return data.find(item => item.id === id);
        },
    };
}

function createDb() {
    return {
        product: createRepository(products),
        category: createRepository(categories),
        brands: createRepository(brands)
    };
}
const db = createDb();
export { categories, products, db }