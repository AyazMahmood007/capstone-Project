package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long>{
	
	public ProductCategory findByCategoryName(String categoryName);
	public ProductCategory findByCategoryId(Long categoryId);

}
