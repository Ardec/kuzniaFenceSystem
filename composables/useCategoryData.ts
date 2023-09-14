import img_1 from '~/assets/fences_1.png';
import img_2 from '~/assets/fences_2.png';


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
      photo_url: img_1,
      link_url: "/index",
      is_enabled: true,
    },
    {
      name: "Ramy bram i furtek",
      photo_url: img_2,
      link_url: "/index",
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