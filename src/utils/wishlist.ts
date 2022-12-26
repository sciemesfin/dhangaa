import { auth } from "../services"

const wishlist = {
    async addToWishList(product: { name: any; unit_price: string; }) {
        let items = await auth.getWishlist()
        let item = items.find((item: { name: any; }) => (item.name == product.name));
        if (!item) {
            let val = {
                price: parseFloat(product.unit_price),
                quantity: 1, ...product
            }
            auth.setWishlist([...items, ...[val]])
        }
        else {
            let data = items.map((x: { name: any; price: any; quantity: number; }) => {
                if (x.name === product.name) {
                    x.price += x.price;
                    x.quantity++;
                }
                return x
            })
            auth.setWishlist(data)
        }
    },
    clearWishlist() {
        auth.clearWishlist()
    },
    async removeItem(item: { name: any; }) {
        let items = await auth.getWishlist()
        let data = items.filter((f: { name: any; }) => f.name !== item.name)
        auth.setWishlist(data)
    },

}

export default wishlist