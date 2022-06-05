package com.friends.invmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.friends.invmgmt.model.ProductLocation;
import com.friends.invmgmt.service.ProductLocationsService;

@RestController
public class ProductLocationController {
	
	
	@Autowired
	ProductLocationsService productLocationService;
	
	@GetMapping("/get-all-locations")
	public ResponseEntity<?> getAllLocations(){
		List<ProductLocation> productLocations = productLocationService.getAllProductLocations();
		if (null != productLocations && productLocations.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(productLocations);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}

}
