
type Category = {
  name: string;
  mdi_icon: string;
  url: string;
};

export default function useMenuData(): { categories: Category[] } {
  const categories: Category[] = [
    {
      name: "category 1",
      mdi_icon: "mdiHome",
      url: "www.onet.pl"
    },
    {
      name: "category 2",
      mdi_icon: "mdiHome",
      url: "www.wp.pl"
    },
  ];

  return { categories };
}