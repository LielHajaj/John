import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsActionType, productsReducer, productsStore } from 'src/app/redux/products-state';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }
    public async getAllProducts(): Promise<ProductModel[]> {
        //read global state
        let products = productsStore.getState().products;
        if (products.length === 0) {
            products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));

            // save the global state
            productsStore.dispatch({ type: ProductsActionType.FetchProducts, payload: products })
        }
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {

        let products = productsStore.getState().products;
        let product = products.find(p => p.id === id);

        if (!product) {
            product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        }
        return product;

    }
    public async addProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);
        const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, formData));
        // Save to global state
        productsStore.dispatch({type: ProductsActionType.AddProduct, payload:addedProduct});
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);

        const updatedProduct = await firstValueFrom(this.http.put<ProductModel>(environment.productsUrl + product.id, formData));
        productsStore.dispatch({type: ProductsActionType.UpdateProduct, payload: updatedProduct});

    }
    public async deleteProduct(id: number): Promise<void> {
        await firstValueFrom(this.http.delete(environment.productsUrl + id));
        productsStore.dispatch({type: ProductsActionType.DeleteProduct, payload: id});
     

    }
}
