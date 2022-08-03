import { createStore } from "redux";
import { ProductModel } from "../models/product.model";

//1. Products global state:
export class ProductsState {
    public products: ProductModel[] = [];
}

//2. Products action type:
export enum ProductsActionType {
    FetchProducts,
    AddProduct,
    UpdateProduct,
    DeleteProduct
}

//3. Products Action:
export interface ProductsAction {
    type: ProductsActionType;
    payload: any;

}
//4. Products Reducer:
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState };//Spread Operator
    switch (action.type) {
        case ProductsActionType.FetchProducts: // here the payload is ProductModel[] array
            newState.products = action.payload;
            break;
        case ProductsActionType.AddProduct: //here the payload is ProductModel object
            newState.products.push(action.payload);
            break;
        case ProductsActionType.UpdateProduct: //here the payload is ProductModel object
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            if (indexToUpdate >= 0) {
                newState.products[indexToUpdate] = action.payload;
            }
            break;
        case ProductsActionType.DeleteProduct: //here the payload is id to delete
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload);
            if(indexToDelete>= 0){
                newState.products.splice(indexToDelete, 1);
            }
            break;
    }
    return newState;

}

//5. products store:
export const productsStore = createStore(productsReducer);
