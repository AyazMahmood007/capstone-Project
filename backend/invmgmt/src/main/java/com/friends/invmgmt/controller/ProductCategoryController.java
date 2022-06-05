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

import com.friends.invmgmt.model.ProductCategory;
import com.friends.invmgmt.service.ProductCategoryService;

@RestController
public class ProductCategoryController {

	@Autowired
	ProductCategoryService productCategoryService;

	@GetMapping("/all-categories")
	public ResponseEntity<?> getAllCategories() {
		List<ProductCategory> productCategories = productCategoryService.getAllCategories();
		if (null != productCategories && productCategories.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(productCategories);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}

	}

	@PostMapping("/addCategory")
	@ResponseBody
	public ResponseEntity<?> saveProductCategory(@RequestBody ProductCategory productCategory) {
		productCategoryService.saveProductCategory(productCategory);
		return ResponseEntity.status(HttpStatus.OK).body(productCategory);

	}

	@PostMapping("/update-category")
	public ResponseEntity<?> updateProductCategory(@RequestBody ProductCategory productCategory) {
		productCategoryService.updateProductCategory(productCategory);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

	@PostMapping("/delete-category")
	public ResponseEntity<?> deleteProductCategory(@RequestBody ProductCategory productCategory) {
		productCategoryService.deleteProductCategory(productCategory);
		return ResponseEntity.status(HttpStatus.OK).body("Success");

	}

}
