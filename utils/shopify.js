

import { GraphQLClient } from 'graphql-request';

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_API_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN;

const client = new GraphQLClient(
    `https://${SHOPIFY_STORE_DOMAIN}/api/2023-07/graphql.json`, {
        headers: {
            'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_API_TOKEN,
            'Content-Type': 'application/json',
        }, 
    });


    export const fetchProductsByTag = async (tag) => {
        const query = `
        query getProducts($tag: String!) {
        products(first: 10, query: $tag) {
            edges {
                node {
                    id
                    title
                    handle
                    description
                    tags
                    priceRange {
                        minVariantPrice {
                            amount
                        }}
                    images(first: 1) {
                        edges {
                            node {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
        `;

        const variables = { tag: `tag:${tag}` };

      try {
        const data = await client.request(query, variables); 
        console.log(data); 
        return data.products.edges;
        
    } catch (error) {
        console.error('Error fetching products:', error); 
        return [];
    }
    }