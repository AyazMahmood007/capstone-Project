package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
