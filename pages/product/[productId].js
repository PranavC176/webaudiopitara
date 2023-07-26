import React from 'react';
import { useRouter } from 'next/router';
import { showData2 } from '@/data'; // Assuming you have the data available
import Image from 'next/image';

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query; // Step 3: Get the productId from the query parameters

  // Step 4: Fetch the product data based on the productId
  const product = showData2.find((item) => item.id === Number(productId));

  // Step 5: Display the product details on the show page
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.time}</p>
          <Image src={product.imageurl} height='200' width='200'/>
          {/* Add other product details */}
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
