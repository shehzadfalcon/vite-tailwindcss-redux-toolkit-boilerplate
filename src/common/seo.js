export function Seo(data = {}) {
  data.title = "Synapme | " + data.title || "Synapme Title";
  data.metaDescription = data.metaDescription || "Default description";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
}
