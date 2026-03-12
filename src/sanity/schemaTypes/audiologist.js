export const audiologist = {
  name: "audiologist",
  title: "Audiologist",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "title", title: "Title & Clinic", type: "string" },
    { name: "text", title: "Quote", type: "text" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};
