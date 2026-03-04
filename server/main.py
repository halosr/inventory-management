from fastapi import FastAPI
from models.models import Product

app = FastAPI()

@app.get("/")
def greet():
    return "Welcome to my first fastapi project"

products = [
    Product(id="1", name="phone", description="A smartphone", price="99.99", quantity="50"),
    Product(id="2", name="laptop", description="A powerful laptop", price="699.99", quantity="10"),
    Product(id="3", name="camera", description="A dslr camera", price="399.99", quantity="35"),
    Product(id="4", name="book", description="a self help books", price="9.99", quantity="150"),
]

@app.get('/products')
def get_all_products():
    return products

@app.get('/products/{id}')
def get_product_by_id(id: int):
    for p in products:
        if p.id == id:
            return p
        
    return "product not found"
    
@app.post("/product")
def add_product(product: Product):
    print("product:", product)
    products.append(product)
    return product

@app.put("/products/{id}")
def update_product(id: int, product: Product):
    for i in range(len(products)):
        if(products[i].id == id):
            products[i] = product
            return product
    return "did not find product with id {id}"

@app.delete("/products/{id}")
def delete_product(id: int):
    for p in products:
        if(p.id == id):
            products.remove(p)
            return p
        
    return "did not find a product with id {id}"