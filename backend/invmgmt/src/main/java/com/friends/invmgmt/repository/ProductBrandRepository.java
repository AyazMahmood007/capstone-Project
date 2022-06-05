package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.ProductBrand;

public interface ProductBrandRepository extends JpaRepository<ProductBrand, Long>{
	
	public ProductBrand findByBrandId(Long brandId);

}
