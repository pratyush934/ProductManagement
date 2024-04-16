package com.backendfropms.backend.service;

import com.backendfropms.backend.model.Product;

import java.util.List;

public interface ProductService {

    /*
     * add product
     * get product
     * get all product
     * update product
     * delete product
     * */
    public Product addProduct(Product product);

    public Product getProductById(Integer id);

    public List<Product> getProduct();

    public String deleteProduct(Integer id);

    public Product editProduct(Product product, Integer id);
}
