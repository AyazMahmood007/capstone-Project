package com.friends.invmgmt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product_sub_category")
public class ProductSubCategory {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="sub_category_id")
	private Long subCategoryId;
	@Column(name="sub_category_name")
	private String subCategoryName;
	@Column(name="sub_category_description")
	private String subCategoryDescription;
	@Column(name="category_id")
	private Long categoryId;
	public Long getSubCategoryId() {
		return subCategoryId;
	}
	public void setSubCategoryId(Long subCategoryId) {
		this.subCategoryId = subCategoryId;
	}
	public String getSubCategoryName() {
		return subCategoryName;
	}
	public void setSubCategoryName(String subCategoryName) {
		this.subCategoryName = subCategoryName;
	}
	public String getSubCategoryDescription() {
		return subCategoryDescription;
	}
	public void setSubCategoryDescription(String subCategoryDescription) {
		this.subCategoryDescription = subCategoryDescription;
	}
	public Long getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
	@Override
	public String toString() {
		return "ProductSubCategory [subCategoryId=" + subCategoryId + ", subCategoryName=" + subCategoryName
				+ ", subCategoryDescription=" + subCategoryDescription + ", categoryId=" + categoryId + "]";
	}
	
}
