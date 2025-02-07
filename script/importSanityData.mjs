import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fetch from 'node-fetch'; // Ensure this is installed if not globally available

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId:"j7dstq5e",
  dataset:"production",
  useCdn: false,
  apiVersion: '2025-01-13',
  token:"skP0Kvt4DfBEWEfEWsS8WoRGv6i7n14jrfIOitcAcJOI2Amu2sYBltZEV9btnREIRpti7Gz3fGaCxARSknTHseXSjHUjNzLA9EyooFSkdIbdUYO4ZTEpprgsoibMRqMC353JuTfig0Jnw7tSh3udY49BsqmepXuLNlh1ycaRQiRbfkcD8PbY"
})

  // projectId:"48ced7dj",
  // dataset: "production",
  // useCdn: false,
  // apiVersion: '2025-01-13',
  // token: "sk6IImxyGrbUwYfGGZNjIiOWl88WIoktOmPejX8juk2zH5XQP0sgDkVDWZC9x9QYxn3vLlwLW6rdbgc6DETpa4q98VjX5ST1Oi6YEZbGjOcgA0ALWDPSSzq9jQMY4gRZfxW4tnK0UvuGjrLzQR8OzQDEixlitBZrlpXy1yvv4aI1H6VHXJzF"



async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image from URL: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', error.message);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.warn(`Skipping product "${product.name}" due to image upload failure.`);
    }
  } catch (error) {
    console.error(`Error uploading product "${product.name}":`, error.message);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();
    console.log(`Fetched ${products.length} products.`);

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('All products uploaded successfully.');
  } catch (error) {
    console.error('Error importing products:', error.message);
  }
}

// Execute import process
importProducts();