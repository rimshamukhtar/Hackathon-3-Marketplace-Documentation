export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'customerName', title: 'Customer Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'products', title: 'Products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
      { name: 'totalAmount', title: 'Total Amount', type: 'number' },
      { name: 'status', title: 'Status', type: 'string' },
    ],
  };
  