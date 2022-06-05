package com.friends.invmgmt.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="product")
public class Product implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5959390642635196218L;
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="product_id")
	private Long productId;	
	@Column(name="product_name")
	private String productName;
	@Column(name="product_description")
	private String productDescription;
	@Column(name="product_location_id")
	private Long productLocationId;
	@Column(name="product_category_id")
	private Long productCategoryId;
	@Column(name="product_sub_category_id")
	private Long productSubCategoryId;
	@Column(name="product_type_id")
	private Long productTypeId;
	@Column(name="cost_price")
	private BigDecimal costPrice;
	@Column(name="qty")
	private Integer qty;
	@Column(name="season")
	private String season;
	@Column(name="size")
	private String size;
	@Column(name="status")
	private String status;
	
	
	
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public Long getProductLocationId() {
		return productLocationId;
	}
	public void setProductLocationId(Long productLocationId) {
		this.productLocationId = productLocationId;
	}
	public Long getProductCategoryId() {
		return productCategoryId;
	}
	public void setProductCategoryId(Long productCategoryId) {
		this.productCategoryId = productCategoryId;
	}
	public Long getProductSubCategoryId() {
		return productSubCategoryId;
	}
	public void setProductSubCategoryId(Long productSubCategoryId) {
		this.productSubCategoryId = productSubCategoryId;
	}
	public Long getProductTypeId() {
		return productTypeId;
	}
	public void setProductTypeId(Long productTypeId) {
		this.productTypeId = productTypeId;
	}
	public BigDecimal getCostPrice() {
		return costPrice;
	}
	public void setCostPrice(BigDecimal costPrice) {
		this.costPrice = costPrice;
	}
	public Integer getQty() {
		return qty;
	}
	public void setQty(Integer qty) {
		this.qty = qty;
	}
	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productLocationId=" + productLocationId + ", productCategoryId="
				+ productCategoryId + ", productSubCategoryId=" + productSubCategoryId + ", productTypeId="
				+ productTypeId + ", costPrice=" + costPrice + ", qty=" + qty + ", season=" + season + ", size=" + size
				+ ", status=" + status + "]";
	}
}
