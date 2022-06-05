package com.friends.invmgmt.model;

import java.io.Serializable;

public class ProductCategoryDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2035900369752985048L;
	private String categoryName;
	private String categoryDescription;
	private String categoryStatus;
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getCategoryDescription() {
		return categoryDescription;
	}
	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}
	public String getCategoryStatus() {
		return categoryStatus;
	}
	public void setCategoryStatus(String categoryStatus) {
		this.categoryStatus = categoryStatus;
	}
	
	
	

}
