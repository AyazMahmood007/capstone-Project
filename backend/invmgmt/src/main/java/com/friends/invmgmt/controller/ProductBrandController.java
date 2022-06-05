package com.friends.invmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.friends.invmgmt.model.ProductBrand;
import com.friends.invmgmt.service.ProductBrandService;

@RestController
public class ProductBrandController {
	
	@Autowired
	ProductBrandService productBrandService;
	
	@GetMapping("/all-brands")
	public ResponseEntity<?> getAllCategories() {
		List<ProductBrand> productCategories = productBrandService.getAllBrands();
		if (null != productCategories && productCategories.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(productCategories);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}

	}

	@PostMapping("/save-brand")
	@ResponseBody
	public ResponseEntity<?> saveProductBrand(@RequestBody ProductBrand productBrand) {
		productBrandService.saveProductBrand(productBrand);
		return ResponseEntity.status(HttpStatus.OK).body(productBrand);

	}

	@PostMapping("/update-brand")
	@ResponseBody
	public ResponseEntity<?> updateProductBrand(@RequestBody ProductBrand productBrand) {
		productBrandService.updateProductBrand(productBrand);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

	@PostMapping("/delete-brand")
	public ResponseEntity<?> deleteProductCategory(@RequestBody ProductBrand productBrand) {
		productBrandService.deleteProductBrand(productBrand);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

}
