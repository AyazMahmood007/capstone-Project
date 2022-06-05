package com.friends.invmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.friends.invmgmt.model.ProductSubCategory;
import com.friends.invmgmt.service.ProductSubCategoryService;

@RestController
public class ProductSubCategoryController {

	@Autowired
	ProductSubCategoryService productSubCategoryService;

	@GetMapping("/all-sub-categories")
	public ResponseEntity<?> getAllCategories() {
		List<ProductSubCategory> productSubCategories = productSubCategoryService.getAllSubCategories();
		if (null != productSubCategories && productSubCategories.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(productSubCategories);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}

	}

	@PostMapping("/save-sub-category")
	public ResponseEntity<?> saveProductCategory(@RequestBody ProductSubCategory productSubCategory) {
		productSubCategoryService.saveProductSubCategory(productSubCategory);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

	@PostMapping("/update-sub-category")
	public ResponseEntity<?> updateProductCategory(@RequestBody ProductSubCategory productSubCategory) {
		productSubCategoryService.updateProductSubCategory(productSubCategory);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

	@PostMapping("/delete-sub-category")
	public ResponseEntity<?> deleteProductCategory(@RequestBody ProductSubCategory productSubCategory) {
		productSubCategoryService.deleteProductSubCategory(productSubCategory);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

}
