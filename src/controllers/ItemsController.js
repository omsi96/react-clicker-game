const initItems = (items) => {
  items.map((item) => {
    return {
      ...item,
      quantity: 0,
      enabled: false,
      actualPrice: () => item.initial_price * item.quantity * item.multiplier,
    };
  });
};

export default initItems;
