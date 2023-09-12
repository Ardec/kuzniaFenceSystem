export default function useMenu() {

  const menuIsOpen: Ref<boolean> = useState('buttonKey', () => false);

  const openCloseMenu = function() {
    menuIsOpen.value = !menuIsOpen.value;
  }

  return {
    menuIsOpen,
    openCloseMenu,
  };
}