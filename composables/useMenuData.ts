
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
      url: "/"
    },
    {
      name: "Panele",
      mdi_icon: "mdiMinusThick",
      url: "/fences"
    },
    {
      name: "Moje zamówienie",
      mdi_icon: "mdiClipboardListOutline",
      url: "/fences"
    },
    {
      name: "Autoryzowani sprzedawcy",
      mdi_icon: "mdiCardAccountPhone",
      url: "fences"
    },
  ];

  return { categories };
}