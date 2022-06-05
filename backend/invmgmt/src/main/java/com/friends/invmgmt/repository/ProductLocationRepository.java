package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.ProductLocation;

public interface ProductLocationRepository extends JpaRepository<ProductLocation, Long>{

}
