import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "fkk2yvw9",
  dataset: "production",
  apiVersion: "2022-08-20",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// console.log(client);

const builder = imageUrlBuilder(client);

// console.log(builder);

export const urlFor = (source) => builder.image(source);
