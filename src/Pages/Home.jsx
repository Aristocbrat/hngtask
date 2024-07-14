import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const organizationId = 'd55cd2fddcbf4f49850c1701b2570c45';
  const appId = 'XRD4JHPIB2YTC8U';
  const apiKey = '6cf20ee8182d402883e8a0882549bc6f20240712145337790022';
  const reverseSort = false;
  const page = 3;
  const size = 10;

  useEffect(() => {
    const fetchProducts = async () => {
         const url = `/api/products?organization_id=${organizationId}&reverse_sort=${reverseSort}&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        setProducts(data);  
        setLoading(false);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1> Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Home;

