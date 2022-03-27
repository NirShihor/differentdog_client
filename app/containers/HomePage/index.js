/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';

export default function HomePage() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3000/v1/customers');
      const data = await response.json();
      console.log(data);
      setCustomers(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p>{customers.value}</p>
      <button onClick={fetchCustomers}>Get Customers</button>
    </div>
  );
}
