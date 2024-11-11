import { useQuery } from '@tanstack/react-query';
import { getData, getShopData } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Sidebar = ({ setProducts, setFilteredProducts, products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const cleanData = (data) => data?.$values ?? data;

  const { data, isLoading, error } = useQuery({
    queryKey: ['productCategory'],
    queryFn: () => getShopData('ProductCategory'),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });

  const categories = cleanData(data);

  const handleCategory = (categoryId) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryId ? '' : categoryId
    );
  };

  const handlePriceChange = (range) => {
    setSelectedPriceRange((prevPrice) => 
      (prevPrice === range ? '' : range));
  };

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.categoryId === selectedCategory
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      filtered = filtered.filter((product) => {
        if (selectedPriceRange === 'lessThan25000') {
          return product.price < 25000;
        } else if (selectedPriceRange === '15000To25000') {
          return product.price >= 15000 && product.price <= 25000;
        }
      });
    }
    setFilteredProducts(filtered);
  }, [selectedCategory, products, setFilteredProducts, selectedPriceRange]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products!</p>;

  return (
    <aside className="sidebar mt-2">
      <div className="">
        <h1 className="mt-4 mb-3">Categories</h1>
        <h3 className="mb-3">Filters</h3>
        <div className="filter mb-3">
          <h4 className="mb-2">Deals</h4>
          {categories.map((category) => (
            <label key={category.id}>
              <input
                className="mb-2"
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => handleCategory(category.id)}
                value={category}
              />{' '}
              {category.categoryName}
              <br></br>
            </label>
          ))}

          {/* Add more filters similarly */}
        </div>
        <div className="filter mb-3">
          <h4 className="mb-2">Price</h4>
          <label>
            <input
              className="mb-2"
              type="checkbox"
              checked={selectedPriceRange === 'lessThan25000'}
              onChange={() => handlePriceChange('lessThan25000')}
            />{' '}
            Less than N25,000
          </label>
          <br></br>
          <label>
            <input
              className="mb-2"
              type="checkbox"
              checked={selectedPriceRange === '15000To25000'}
              onChange={() => handlePriceChange('15000To25000')}
            />{' '}
            N15,000 - N25,000
          </label>
          <br></br>
        </div>
        <div className="filter">
          <h4 className="mb-2">Colour</h4>
          <label>
            <input className="mb-2" type="radio" name="color" /> Green
          </label>
          <br></br>
          <label>
            <input className="mb-2" type="radio" name="color" /> Blue
          </label>
        </div>
      </div>
    </aside>
  );
};
