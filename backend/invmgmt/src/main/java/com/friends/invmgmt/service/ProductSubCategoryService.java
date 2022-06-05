package com.friends.invmgmt.service;

import java.util.List;

import com.friends.invmgmt.model.ProductSubCategory;



public interface ProductSubCategoryService {
	
	public ProductSubCategory getProductCategoryByName(Long subCategoryId);
	public void saveProductSubCategory(ProductSubCategory productSubCategory);
	public void updateProductSubCategory(ProductSubCategory productSubCategory);
	public void deleteProductSubCategory(ProductSubCategory productSubCategory);
	public List<ProductSubCategory> getAllSubCategories();
	

}
