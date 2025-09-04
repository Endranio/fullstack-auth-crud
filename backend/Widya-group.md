# Project: Widya-group
# 🚀 Get started here

This template guides you through CRUD operations (GET, POST, PUT, DELETE), variables, and tests.

## 🔖 **How to use this template**

#### **Step 1: Send requests**

RESTful APIs allow you to perform CRUD operations using the POST, GET, PUT, and DELETE HTTP methods.

This collection contains each of these [request](https://learning.postman.com/docs/sending-requests/requests/) types. Open each request and click "Send" to see what happens.

#### **Step 2: View responses**

Observe the response tab for status code (200 OK), response time, and size.

#### **Step 3: Send new Body data**

Update or add new data in "Body" in the POST request. Typically, Body data is also used in PUT request.

```
{
    "name": "Add your name in the body"
}

 ```

#### **Step 4: Update the variable**

Variables enable you to store and reuse values in Postman. We have created a [variable](https://learning.postman.com/docs/sending-requests/variables/) called `base_url` with the sample request [https://postman-api-learner.glitch.me](https://postman-api-learner.glitch.me). Replace it with your API endpoint to customize this collection.

#### **Step 5: Add tests in the "Scripts" tab**

Adding tests to your requests can help you confirm that your API is working as expected. You can write test scripts in JavaScript and view the output in the "Test Results" tab.

<img src="https://content.pstmn.io/fa30ea0a-373d-4545-a668-e7b283cca343/aW1hZ2UucG5n" alt="" height="1530" width="2162">

## 💪 Pro tips

- Use folders to group related requests and organize the collection.
    
- Add more [scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/) to verify if the API works as expected and execute workflows.
    

## 💡Related templates

[API testing basics](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9a37a28-055b-49cd-8c7e-97494a21eb54&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  
[API documentation](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9c28f47-1253-44af-a2f3-20dce4da1f18&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  
[Authorization methods](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=31a9a6ed-4cdf-4ced-984c-d12c9aec1c27&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)

## End-point: check
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.
### Method: GET
>```
>http://localhost:5000/auth/check
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2MjI5MTM5LTllMWMtNGUyMi04MzlmLTA5MWI0MzQ2MjIxMCIsImlhdCI6MTc1Njk1MzA5NywiZXhwIjoxNzU3MDM5NDk3fQ.PSFaoFWg4AGgoAaRxwG51qsZJwg7Tnz6mtz8H1k6TFQ|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all product
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.
### Method: GET
>```
>http://localhost:5000/product
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlMjc3ZTdmLTIxNTgtNGJiNi1hNzQ0LWIwN2UzZmY4OTYyYiIsImlhdCI6MTc1Njg4MjM0MiwiZXhwIjoxNzU2OTY4NzQyfQ.mZv4Wag7jpdZR8A786oL7pGrr-y7EmyprFIkRJVpXp4|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get product user
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.
### Method: GET
>```
>http://localhost:5000/product/user
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlMjc3ZTdmLTIxNTgtNGJiNi1hNzQ0LWIwN2UzZmY4OTYyYiIsImlhdCI6MTc1Njg4MjM0MiwiZXhwIjoxNzU2OTY4NzQyfQ.mZv4Wag7jpdZR8A786oL7pGrr-y7EmyprFIkRJVpXp4|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: register
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.

A successful POST request typically returns a `200 OK` or `201 Created` response code.
### Method: POST
>```
>http://localhost:5000/auth/register
>```
### Body (**raw**)

```json
{
	"name": "Endra",
    "email":"endra@gmail.com",
    "password":"password",
    "gender": "Male"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.

A successful POST request typically returns a `200 OK` or `201 Created` response code.
### Method: POST
>```
>http://localhost:5000/auth/login
>```
### Body (**raw**)

```json
{
	"email": "jono@gmail.com",
    "password":"password"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add product
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.

A successful POST request typically returns a `200 OK` or `201 Created` response code.
### Method: POST
>```
>http://localhost:5000/product
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzODU4MDViLTA2NzYtNGZlNC04MjdhLTdmN2ZiMTRjMzRjNiIsImlhdCI6MTc1Njg3NDEwMiwiZXhwIjoxNzU2OTYwNTAyfQ.TgSrEt92bx8tvq-6a19zq9o7zCF4a_qHxRRxTACkNaY|


### Body (**raw**)

```json
{
	"name": "prod1",
    "description":"lorem"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update product
This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).

A successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code.
### Method: PATCH
>```
>http://localhost:5000/product/088c328d-a333-4349-b2b8-545065574227
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzODU4MDViLTA2NzYtNGZlNC04MjdhLTdmN2ZiMTRjMzRjNiIsImlhdCI6MTc1Njg3NDEwMiwiZXhwIjoxNzU2OTYwNTAyfQ.TgSrEt92bx8tvq-6a19zq9o7zCF4a_qHxRRxTACkNaY|


### Body (**raw**)

```json
{
	"name": "edited",
    "description":"edited"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete product
This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).

A successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code.
### Method: DELETE
>```
>http://localhost:5000/product/088c328d-a333-4349-b2b8-545065574227
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzODU4MDViLTA2NzYtNGZlNC04MjdhLTdmN2ZiMTRjMzRjNiIsImlhdCI6MTc1Njg3NDEwMiwiZXhwIjoxNzU2OTYwNTAyfQ.TgSrEt92bx8tvq-6a19zq9o7zCF4a_qHxRRxTACkNaY|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
