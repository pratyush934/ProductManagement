package com.backendfropms.backend.cotroller;

import com.backendfropms.backend.model.Product;
import com.backendfropms.backend.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    ProductServiceImpl productService;

    @PostMapping("/save")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.addProduct(product), HttpStatus.CREATED);
    }


    @GetMapping("/")
    public ResponseEntity<?> getAllProducts() {
        return new ResponseEntity<>(productService.getProduct(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
        return new ResponseEntity<>(productService.editProduct(product, id), HttpStatus.CREATED);
    }


}
