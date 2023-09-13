
type Category = {
  name: string;
  photo_url: string;
  link_url: string;
  is_enabled: boolean;
};

export default function useCategoryData(): { categories: Category[] } {
  const categories: Category[] = [
    {
      name: "Przęsła ogrodzeniowe na wymiar",
      photo_url: "/index",
      link_url: "/index",
      is_enabled: true,
    },
    {
      name: "Ramy bram i furtek na wymiar",
      photo_url: "/index",
      link_url: "www.wp.pl",
      is_enabled: false,
    },
    {
      name: "Akcesoria",
      photo_url: "/index",
      link_url: "www.wp.pl",
      is_enabled: false,
    },
  ];

  return { categories };
}