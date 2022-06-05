package com.friends.invmgmt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.friends.invmgmt.model.AppUser;
import com.friends.invmgmt.repository.UserLoginRepository;

@Service
public class UserLoginServiceImpl implements UserLoginService {

	@Autowired
	UserLoginRepository userLoginRepository;

	@Override
	public AppUser getAppUserByNameAndPassword(String userName, String password) {
		return userLoginRepository.findByUserNameAndPassword(userName, password);
	}

}
