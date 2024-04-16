package com.backendfropms.backend.service;

import com.backendfropms.backend.model.Product;
import com.backendfropms.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public List<Product> getProduct() {
        return productRepository.findAll();
    }


    @Override
    public String deleteProduct(Integer id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return "Deleted SuccessFully";
        } else {
            return "So Sorry";

        }
    }

    @Override
    public Product editProduct(Product product, Integer id) {
        Product oldProduct = productRepository.findById(id).get();

        oldProduct.setProductName(product.getProductName());
        oldProduct.setDescription(product.getDescription());
        oldProduct.setStatus(product.getStatus());
        oldProduct.setPrice(product.getPrice());

        return productRepository.save(oldProduct);
    }
}
