package com.friends.invmgmt.service;

import java.util.List;

import com.friends.invmgmt.model.Product;



public interface ProductService {
	
	public Product getProductByName(String productName);
	public void saveProduct(Product product);
	public void updateProduct(Product product);
	public void deleteProductCategory(Product product);
	public List<Product> getAllProducts();

}
