type Panel = {
  id: number;
  color: string;
  hex: string;
  min_height: number;
  max_height: number;
  price: number;
};

export default function useMenuData(): { panels: Panel[] } {
  const panels: Panel[] = [
    {
      id: 1,
      color: "7016 połysk",
      hex: "#474d51",
      min_height: 90,
      max_height: 300,
      price: 84.2,
    },
    {
      id: 2,
      color: "7016 struktura",
      hex: '#383e42',
      min_height: 90,
      max_height: 300,
      price: 84.2,
    },
    {
      id: 3,
      color: '7016 połysk',
      hex: '#121214',
      min_height: 200,
      max_height: 400,
      price: 84.2,
    },
    {
      id: 4,
      color: '7016 struktura',
      hex: '#0e0e10',
      min_height: 200,
      max_height: 400,
      price: 84.2,
    },
  ];

  return { panels };
}