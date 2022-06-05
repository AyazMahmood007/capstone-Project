package com.friends.invmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.friends.invmgmt.model.Product;
import com.friends.invmgmt.service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/get-all-products")
	public ResponseEntity<?> getAllCategories() {
		List<Product> products = productService.getAllProducts();
		if (null != products && products.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(products);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}

	}
	
	@PostMapping("/save-product")
	public ResponseEntity<?> saveProduct(@RequestBody Product product){
		 productService.saveProduct(product);
		return ResponseEntity.status(HttpStatus.OK).body(product);
	}

}
