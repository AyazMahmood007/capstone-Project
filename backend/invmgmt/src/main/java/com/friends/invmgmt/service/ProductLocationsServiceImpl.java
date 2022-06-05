package com.friends.invmgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.friends.invmgmt.model.ProductLocation;
import com.friends.invmgmt.repository.ProductLocationRepository;

@Service
public class ProductLocationsServiceImpl implements ProductLocationsService{
	
	@Autowired
	ProductLocationRepository productLocationRepository;

	@Override
	public List<ProductLocation> getAllProductLocations() {
		
		return productLocationRepository.findAll();
	}
	
	

}
