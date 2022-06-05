package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.ProductLocation;
import com.friends.invmgmt.model.ProductType;

public interface ProductTypesRepository extends JpaRepository<ProductType, Long>{

}
