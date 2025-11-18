import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";

// Cloudinary configuration
export const cloudinaryConfig = {
  cloudName: "dykq0fioe",
  apiKey: "252478965232864",
  apiSecret: "_FcN5HP1sPbv4QFNqb-zg6jUQ2M",
};

// Create and export a configured Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudinaryConfig.cloudName,
  },
});

// Helper function to create optimized images
export const createOptimizedImage = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  }
) => {
  const img = cld.image(publicId);

  if (options?.format) {
    img.format(options.format);
  } else {
    img.format("auto"); // Auto-format for optimal delivery
  }

  if (options?.quality) {
    img.quality(options.quality);
  } else {
    img.quality("auto"); // Auto-quality for optimal delivery
  }

  if (options?.width || options?.height) {
    const resizeAction = scale();
    if (options.width) resizeAction.width(options.width);
    if (options.height) resizeAction.height(options.height);
    img.resize(resizeAction);
  }

  return img;
};
