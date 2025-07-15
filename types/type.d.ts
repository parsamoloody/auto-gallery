type CaTegory = {
    id: string
    catName: string
    imageUrl: string
    coverUrl: any
}
type Product = {
    id: string,
    category: string,
    content: ProductContent[]
}
type StaticImage = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};
type Brands = {
    name: string,
    id: string,
    category: string[],
    image: {
        url: StaticImage,
        alt?: string
    }
}
interface ProductContent {
    name: string
    description: string
    price: {
        rent: number
        discount: number
    }
    isNew: boolean
    images: any
    inStock: boolean
}
interface Entity {
    id: string;
}
interface Repository<T extends Entity> {
    findMany(): Promise<T[]>;
    findById(id: string): Promise<T | undefined>;
}
interface Delivery<T> {
    byStock(isStock: boolean): Promise<T[]>;
    byPrice({ min: number, max: number }): Promise<T[]>;
    byDiscount(isDiscount: boolean): Product<T[]>;
    byNew(isNew: boolean): Promise<T[]>;
}
export { CaTegory, Product, ProductContent, Entity, Repository, Delivery, Brands, StaticImage }