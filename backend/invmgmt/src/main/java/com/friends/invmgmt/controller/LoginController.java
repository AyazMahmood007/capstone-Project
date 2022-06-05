package com.friends.invmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.friends.invmgmt.model.AppUser;
import com.friends.invmgmt.service.UserLoginService;

@RestController
public class LoginController {
	
	@Autowired
	UserLoginService userLoginService;
	
	@GetMapping("/login")
	public ResponseEntity<?> getUserLogin(@RequestParam  String userName, @RequestParam String password){
		AppUser appUser = userLoginService.getAppUserByNameAndPassword(userName, password);
		if(null!=appUser) {
			return ResponseEntity.status(HttpStatus.OK).body(appUser);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(appUser);
		}
		
	}

}
