package com.friends.invmgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.friends.invmgmt.model.ProductBrand;
import com.friends.invmgmt.repository.ProductBrandRepository;

@Service
public class ProdcutBrandServiceImpl implements ProductBrandService{
	
	@Autowired
	ProductBrandRepository productBrandRepository;

	@Override
	public List<ProductBrand> getAllBrands() {
		
		return productBrandRepository.findAll();
	}

	@Override
	public ProductBrand getProductBrandByBrandId(Long brandId) {
		
		return productBrandRepository.findByBrandId(brandId);
	}

	@Override
	public ProductBrand saveProductBrand(ProductBrand productBrand) {
		
		return productBrandRepository.save(productBrand);
	}

	@Override
	public ProductBrand updateProductBrand(ProductBrand productBrand) {
		try {
			ProductBrand prodBrand =  productBrandRepository.findByBrandId(productBrand.getBrandId());
			if(null!= prodBrand) {
				prodBrand.setBrandName(productBrand.getBrandName());
				prodBrand.setBrandDescription(productBrand.getBrandDescription());
				productBrandRepository.save(prodBrand);
			}
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	@Override
	public void deleteProductBrand(ProductBrand productBrand) {
		productBrandRepository.delete(productBrand);
		
	}
	

}
