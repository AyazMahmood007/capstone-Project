package com.friends.invmgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.friends.invmgmt.model.ProductType;
import com.friends.invmgmt.repository.ProductTypesRepository;

@Service
public class ProductTypesServiceImpl implements ProductTypesService{
	
	@Autowired
	ProductTypesRepository productTypesRepository;

	@Override
	public List<ProductType> getAllProductTypes() {
		return productTypesRepository.findAll();
	}
	
	

}
