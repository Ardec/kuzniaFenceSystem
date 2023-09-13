
type Category = {
  name: string;
  mdi_icon: string;
  url: string;
};

export default function useMenuData(): { categories: Category[] } {
  const categories: Category[] = [
    {
      name: "Strona główna",
      mdi_icon: "mdiHome",
      url: "/index"
    },
    {
      name: "Panele",
      mdi_icon: "mdiMinusThick",
      url: "www.wp.pl"
    },
    {
      name: "Moje zamówienie",
      mdi_icon: "mdiClipboardListOutline",
      url: "www.wp.pl"
    },
    {
      name: "Autoryzowani sprzedawcy",
      mdi_icon: "mdiCardAccountPhone",
      url: "www.wp.pl"
    },
  ];

  return { categories };
}