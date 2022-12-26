import * as SecureStore from 'expo-secure-store';
const key = "token"
const value = "ethyopasfjdshfdh"
const auth = {
    async isAutenticated() {
        let result = await SecureStore.getItemAsync(key);
        return result && result !== null
    },
    signin: async (token:any) => {
        await SecureStore.setItemAsync(key, JSON.stringify(token))
    },
    async signup(user:any) {
        await SecureStore.setItemAsync(key, JSON.stringify(user))
    },
    async logout() {
        await SecureStore.deleteItemAsync(key);
    },
    async getToken() {
        let result = await SecureStore.getItemAsync(key);
        return result
    },
    async setCartItems(items:any) {
        await SecureStore.setItemAsync("carts", JSON.stringify(items))
    },
    async getCartItems() {
        let result = await SecureStore.getItemAsync('carts');
        return result !== null ? JSON.parse(result) : []
    },
    async clearCart() {
        await SecureStore.deleteItemAsync('carts');
    },

    async setWishlist(items:any) {
        await SecureStore.setItemAsync("wishlist", JSON.stringify(items))
    },
    async getWishlist() {
        let result = await SecureStore.getItemAsync('wishlist');
        return result !== null ? JSON.parse(result) : []
    },
    async clearWishlist() {
        await SecureStore.deleteItemAsync('wishlist');
    },
}
export default auth