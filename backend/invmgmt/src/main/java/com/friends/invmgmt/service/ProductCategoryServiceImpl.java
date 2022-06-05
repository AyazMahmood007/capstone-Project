package com.friends.invmgmt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.friends.invmgmt.model.ProductCategory;
import com.friends.invmgmt.repository.ProductCategoryRepository;
@Service
public class ProductCategoryServiceImpl implements ProductCategoryService{
	
	@Autowired
	ProductCategoryRepository productCategoryRepository;

	@Override
	public ProductCategory getProductCategoryByName(String categoryName) {
		
		return productCategoryRepository.findByCategoryName(categoryName);
	}

	@Override
	public void saveProductCategory(ProductCategory productCategory) {
		productCategoryRepository.save(productCategory);
		
	}

	@Override
	public void updateProductCategory(ProductCategory productCategory) {
		try {
		 ProductCategory prodCategory = productCategoryRepository.findByCategoryId(productCategory.getCategoryId());
			if(null!=prodCategory) {
				prodCategory.setCategoryName(productCategory.getCategoryName());
				prodCategory.setCategoryDescription(productCategory.getCategoryDescription());
				prodCategory.setCategoryStatus(productCategory.getCategoryStatus());
				productCategoryRepository.save(prodCategory);
			}
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		
		
		
	}

	@Override
	public void deleteProductCategory(ProductCategory productCategory) {		
		productCategoryRepository.delete(productCategory);
	}

	@Override
	public List<ProductCategory> getAllCategories() {
		// TODO Auto-generated method stub
		return productCategoryRepository.findAll();
	}

}
