
type Category = {
  name: string;
  photo_url: string;
  link_url: string;
  is_enabled: boolean;
};

export default function useCategoryData(): { categories: Category[] } {
  const categories: Category[] = [
    {
      name: "Przęsła ogrodzeniowe",
      photo_url: "/_nuxt/assets/fences_1.png",
      link_url: "/index",
      is_enabled: true,
    },
    {
      name: "Ramy bram i furtek",
      photo_url: "/_nuxt/assets/fences_2.png",
      link_url: "www.wp.pl",
      is_enabled: false,
    },
    // {
    //   name: "Akcesoria",
    //   photo_url: "/index",
    //   link_url: "www.wp.pl",
    //   is_enabled: false,
    // },
  ];

  return { categories };
}