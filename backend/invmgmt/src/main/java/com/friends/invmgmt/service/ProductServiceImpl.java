package com.friends.invmgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.friends.invmgmt.model.Product;
import com.friends.invmgmt.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	ProductRepository productRepository;

	@Override
	public Product getProductByName(String productName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveProduct(Product product) {
		productRepository.save(product);		
	}

	@Override
	public void updateProduct(Product product) {
		// TODO Auto-generated method stub
		productRepository.save(product);
		
	}

	@Override
	public void deleteProductCategory(Product product) {
		// TODO Auto-generated method stub
		
		
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

}
