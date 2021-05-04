import React, { Component } from 'react';
export default class APICalls {
	public static fetchData(): any {
		return fetch("https://reqres.in/api/users?page=1")
			.then(res => res.json())
			.then(
				(result) => {
					return result
				},
				(error) => {
					throw new Error("Error on request");
				}
			)
	}

}
