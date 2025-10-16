import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { cld, createOptimizedImage } from '~/lib/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: string;
  format?: string;
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  publicId,
  alt,
  width = 500,
  height = 500,
  className = '',
  quality = 'auto',
  format = 'auto'
}) => {
  // Create optimized image with transformations
  const img = cld
    .image(publicId)
    .format(format)
    .quality(quality)
    .resize(auto().gravity(autoGravity()).width(width).height(height));

  return (
    <AdvancedImage
      cldImg={img}
      alt={alt}
      className={className}
    />
  );
};

// Simple optimized image component without transformations
export const OptimizedImage: React.FC<CloudinaryImageProps> = ({
  publicId,
  alt,
  width,
  height,
  className = '',
  quality = 'auto',
  format = 'auto'
}) => {
  const img = createOptimizedImage(publicId, {
    width,
    height,
    quality,
    format
  });

  return (
    <AdvancedImage
      cldImg={img}
      alt={alt}
      className={className}
    />
  );
};

// Sample component demonstrating Cloudinary usage
export const CloudinarySample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Cloudinary Integration Sample</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-md font-medium mb-2">Sample Image (Auto-cropped)</h4>
          <CloudinaryImage
            publicId="cld-sample-5"
            alt="Cloudinary sample image"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        
        <div>
          <h4 className="text-md font-medium mb-2">Optimized Image</h4>
          <OptimizedImage
            publicId="cld-sample-5"
            alt="Optimized sample image"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
