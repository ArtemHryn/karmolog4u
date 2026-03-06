interface PriceWithDiscountProps {
  discount: number;
  price: number;
}

export const getPriceWithDiscount = ({ discount, price }: PriceWithDiscountProps) => {
  if (!discount || !price) return '';
  return price - (price * discount) / 100;
};
