import { add, removeItem, update } from "../api/product";
import useSWR from "swr";
const useProducts = (options?: any) => {
    const { data, error, mutate } = useSWR("/products", { dedupingInterval: 2000, ...options });
    const create = async (item: any) => {
        const product = await add(item);
        mutate([...data, product]);
    };
    const remove = async (id: any) => {
        const confirm = window.confirm('Bạn có muốn xóa không ?')
        if (confirm) {
            await removeItem(id);
            const newProducts = data.filter((item: any) => item.id != id);
            mutate(newProducts);
        }
    };
    const editProduct = async (product: any) => {
        await update(product)
        mutate(data.map((item: any) => (item.id === data.id ? product : item)))
    }
    return {
        data,
        error,
        create,
        remove,
        editProduct
    };
};

export default useProducts;