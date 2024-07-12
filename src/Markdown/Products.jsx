import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/timbuApi';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Start from the first page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({
          organization_id: 123,
          reverse_sort: false,
          page: currentPage,
          size: 10 // Number of items per page
        });
        setProducts(data.items);
        setTotalPages(Math.ceil(data.total / 10)); 
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Our Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.product_image[0]?.url || 'placeholder.jpg'} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
