export const testimonial = {
  name: "testimonial",
  title: "Patient Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "age", title: "Age", type: "number" },
    { name: "location", title: "Location", type: "string" },
    { name: "since", title: "Patient Since", type: "string" },
    { name: "text", title: "Quote", type: "text" },
    { name: "detail", title: "Hearing Loss Detail", type: "string" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
  ],
};
