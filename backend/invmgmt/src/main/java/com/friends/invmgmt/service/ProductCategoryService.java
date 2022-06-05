package com.friends.invmgmt.service;

import java.util.List;

import com.friends.invmgmt.model.ProductCategory;

public interface ProductCategoryService {
	
	public ProductCategory getProductCategoryByName(String categoryName);
	public void saveProductCategory(ProductCategory productCategory);
	public void updateProductCategory(ProductCategory productCategory);
	public void deleteProductCategory(ProductCategory productCategory);
	public List<ProductCategory> getAllCategories();
	

}
