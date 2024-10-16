import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products",
    {
        cache:  "no-store"
    });

  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
        <div className="py-2">
            <AddProduct></AddProduct>
        </div>
      <table className="table w-full">
        <thead className="bg-gray-200">
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                
                <td className="flex">
                    <UpdateProduct {...product} />
                    <DeleteProduct {...product}/>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
