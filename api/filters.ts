import { Delivery, Product } from "@/types/type";
import { products } from "./database";
// { content: { inStock: boolean, price: { rent: number, discount: number } }[], }
function createDelivery<T extends Product>(d: T[]): Delivery<T> {
    return {
        async byStock(isStock: boolean): Promise<T[]> {
            return d.filter(i =>
                i.content.some(c => c.inStock === isStock)
            );
        },
        async byPrice({ min, max }: { min: number, max: number }): Promise<T[]> {
            return d.filter(i =>
                i.content.some(c =>
                    (c.price.rent) >= min &&
                    (c.price.discount) <= max
                )
            );
        },
        async byDiscount(isStock: boolean): Promise<T[]> {
            return isStock ? d.filter(i => i.content.some((c) => c.price.discount > 0)) : d
        },
        async byNew(isNew: boolean): Promise<T[]> {
            return d.filter(i => i.content.some(c => c.isNew === isNew))
        },
    };
}

function createFilter() {
    return {
        product: createDelivery(products),
    };
}

const filter = createFilter();
export default filter;
