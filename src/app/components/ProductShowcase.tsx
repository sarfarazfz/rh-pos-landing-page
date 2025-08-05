import React from 'react';
import Image from 'next/image';

interface ProductShowcaseProps {
  imageUrl?: string | null;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ imageUrl }) => {
  return (
    <section className="px-6 -mt-16 md:-mt-24 relative z-10">
      <div className="g-teal-100 max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-custom-bottom">
        {imageUrl ? (
          <Image
            src={encodeURI(imageUrl)}
            alt="RH POS Dashboard"
            width={1200}
            height={600}
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-2xl w-full h-auto block"
          />
        ) : (
          <div className="aspect-[2/1] w-full rounded-2xl bg-slate-200 flex items-center justify-center text-black-300 text-teal-600 text-lg">
            RH POS Dashboard
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
