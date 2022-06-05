package com.friends.invmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.friends.invmgmt.model.ProductType;
import com.friends.invmgmt.service.ProductTypesService;

@RestController
public class ProductTypesController {
	
	@Autowired
	ProductTypesService productTypesService;
	
	@GetMapping("/get-all-types")
	public ResponseEntity<?> getAllProductTypes(){
		
		List<ProductType> productTypes = productTypesService.getAllProductTypes();
		if (null != productTypes && productTypes.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(productTypes);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
	

}
