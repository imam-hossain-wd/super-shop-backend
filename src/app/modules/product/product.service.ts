import { IProduct } from "./product.interface";
import { Product } from "./product.model";


const getAllProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const result = await Product.create(product);
  console.log(result, 'result');
  return result;
};

const updateProduct = async (id: string, updatedProduct: IProduct): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
    createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
