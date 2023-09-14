import img_1 from '~/assets/gal_1.png';
import img_2 from '~/assets/gal_2.png';


type Picture = {
  photo_url: string;
};

export default function useGalleryData(): { gallery: Picture[] } {
  const gallery: Picture[] = [
    {
      photo_url: img_1,
    },
    {
      photo_url: img_2,
    },
  ];

  return { gallery };
}