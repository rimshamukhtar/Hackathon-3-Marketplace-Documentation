export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'name', title: 'Product Name', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'size', title: 'Size', type: 'string' },
      { name: 'category', title: 'Category', type: 'string' },
      { name: 'stock', title: 'Stock', type: 'number' },
      { name: 'image', title: 'Image', type: 'image' },
    ],
  };
  