package com.friends.invmgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.friends.invmgmt.model.ProductSubCategory;
import com.friends.invmgmt.repository.ProductSubCategoryRepository;

@Service
public class ProductSubCategoryServiceImpl implements ProductSubCategoryService {

	@Autowired
	ProductSubCategoryRepository productSubCategoryRepository;

	@Override
	public ProductSubCategory getProductCategoryByName(Long subCategoryId) {
		return productSubCategoryRepository.findBySubCategoryId(subCategoryId);
	}

	@Override
	public void saveProductSubCategory(ProductSubCategory productSubCategory) {
		productSubCategoryRepository.save(productSubCategory);

	}

	@Override
	public void updateProductSubCategory(ProductSubCategory productSubCategory) {
		try {
			ProductSubCategory prodSubCategory = productSubCategoryRepository
					.findBySubCategoryId(productSubCategory.getSubCategoryId());
			prodSubCategory.setSubCategoryName(prodSubCategory.getSubCategoryName());
			prodSubCategory.setSubCategoryDescription(productSubCategory.getSubCategoryDescription());
			prodSubCategory.setCategoryId(productSubCategory.getCategoryId());
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

	@Override
	public void deleteProductSubCategory(ProductSubCategory productSubCategory) {
		productSubCategoryRepository.delete(productSubCategory);
	}

	@Override
	public List<ProductSubCategory> getAllSubCategories() {
		return productSubCategoryRepository.findAll();
	}
}
