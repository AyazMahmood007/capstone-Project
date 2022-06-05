package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.ProductSubCategory;

public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Long>{
	
	public ProductSubCategory findBySubCategoryId(Long subCategoryId);

}
