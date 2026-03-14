import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types/product';
import {
    addProductApi,
    deleteProductApi,
    getAllProductsApi,
    getProductApi,
    updateProductApi,
} from '@/api/products.api';

interface ProductState {
    productList: Product[];
    product: Product;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    productList: [],
    product: {
        id: null,
        name: null,
        description: null,
        price: null,
        quantity: null,
    },
    loading: false,
    error: null,
};

export const getProducts = createAsyncThunk('product/getProducts', async () => {
    const res = await getAllProductsApi();
    return res.data as Product[];
});

export const getProduct = createAsyncThunk('product/getProduct', async (id: number) => {
    const res = await getProductApi(id);
    return res.data as Product;
});

export const createProduct = createAsyncThunk('product/createProduct', async (product: Product, thunkApi) => {
    const res = await addProductApi(product);
    const added = res.data as Product;

    // optional: reload the list after adding
    thunkApi.dispatch(getProducts());

    return added;
});

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (payload: { id: number; product: Product }) => {
        const res = await updateProductApi(payload.id, payload.product);
        return res.data as Product;
    }
);

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id: number) => {
    const res = await deleteProductApi(id);

    return res.data;
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productList = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to load products';
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.productList.push(action.payload);
                state.product = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to add product';
            });
    },
});

export default productSlice.reducer;
