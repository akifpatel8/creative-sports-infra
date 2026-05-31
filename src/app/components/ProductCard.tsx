import type { Product } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type ProductCardProps = {
  product: Product;
  onContactClick: () => void;
};

export function ProductCard({ product, onContactClick }: ProductCardProps) {
  const { title, description, imageSrc, pricePerSqFt } = product;

  return (
    <Card className="overflow-hidden pt-0 gap-0 flex flex-col h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="gap-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <div className="px-6 pb-2 mt-auto">
        <p className="text-lg font-semibold text-blue-600">
          ₹{pricePerSqFt.toLocaleString('en-IN')}
          <span className="text-sm font-normal text-gray-500"> / sq.ft</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">Indicative rate; varies by scope</p>
      </div>
      <CardFooter className="pt-2 border-t border-gray-100 mt-auto">
        <Button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={onContactClick}
        >
          Contact us
        </Button>
      </CardFooter>
    </Card>
  );
}
