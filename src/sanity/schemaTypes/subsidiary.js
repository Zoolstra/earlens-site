export const subsidiary = {
  name: "subsidiary",
  title: "Subsidiary",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "logo", title: "Logo", type: "image", options: { hotspot: false } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};
