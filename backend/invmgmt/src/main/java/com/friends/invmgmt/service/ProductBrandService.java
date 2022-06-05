package com.friends.invmgmt.service;

import java.util.List;

import com.friends.invmgmt.model.ProductBrand;

public interface ProductBrandService {
	
	public List<ProductBrand> getAllBrands();
	public ProductBrand getProductBrandByBrandId(Long brandId);
	public ProductBrand saveProductBrand(ProductBrand productBrand);
	public ProductBrand updateProductBrand(ProductBrand productBrand);
	public void deleteProductBrand(ProductBrand productBrand);
	

}
