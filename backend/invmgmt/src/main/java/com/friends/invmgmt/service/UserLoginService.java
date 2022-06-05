package com.friends.invmgmt.service;

import com.friends.invmgmt.model.AppUser;

public interface UserLoginService {
	
	public AppUser getAppUserByNameAndPassword(String userName, String password);

}
