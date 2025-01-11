//Static Site Generation (SSG)
//Faster (pre-rendered, CDN)

import MyButton from "@/components/MyButton";
import { GetStaticProps } from "next";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface SSGProductProps {
  products: Product[];
}

const SSGProduct: React.FC<SSGProductProps> = ({ products }) => {
  return (
    <div>
      <h1>Static Site Generated (SSG) InstaShop-Dumy Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-4 mb-4 rounded shadow mt-5">
            <p>
              <img
                src={product.image}
                //quality={100}
                width={100}
                height={100}
                alt="Product Image"
              />
            </p>
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-[#8A226F] font-semibold py-4">
              Price: ${product.price}
            </p>

            <MyButton>Add to Cart</MyButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products"); // Fetch from dummy API
    const products: Product[] = await res.json();

    console.log(products);

    return {
      props: {
        products,
      },
      revalidate: 60, // Revalidate data every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
};

export default SSGProduct;