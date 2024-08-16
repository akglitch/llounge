export interface Product {
    id: number;
    imageUrl: string;
    altText: string;
    label: string;
    price: number;
    status?: string;
  }   

  export interface CartItem {
    id: number;
    name: string;
    href: string; // Assuming this is a link to the product details
    color: string; // Assuming this represents the selected size or color
    price: string; // Consider using a specific type for price, like a number or Decimal, based on your needs
    quantity: number;
    imageSrc: string;
    imageAlt: string;
  }
  

  interface SizeOption {
    value: string; // e.g., '18L', '20L'
    description: string; // Description of the size option
  }   



  interface ProductOverviewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
  }