package com.example.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class entity 
{
	private int userId;
	private String userName;
	private String email;
	private String password;
	public entity(int userId, String userName, String email, String password) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}
	public entity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
