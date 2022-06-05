package com.friends.invmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.friends.invmgmt.model.AppUser;

public interface UserLoginRepository extends JpaRepository<AppUser, Long>{
	
	public AppUser findByUserNameAndPassword(String userName, String Password);

}
