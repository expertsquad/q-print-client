interface CustomGlobalDrawerProps {
  drawerController?: string;
  children: React.ReactNode;
  drawerControllerClassName?: string;
  childrenClassName?: string;
  isVisible?: boolean;
  setOpenDrawer?: (value: boolean) => void;
}

const CustomGlobalDrawer = ({
  drawerController,
  children,
  drawerControllerClassName,
  childrenClassName,
  setOpenDrawer,
  isVisible,
}: CustomGlobalDrawerProps) => {
  if (!isVisible) return null;
  return (
    <div
      onClick={() => {
        if (setOpenDrawer) {
          setOpenDrawer(false);
        }
      }}
      className={`${drawerControllerClassName} w-dvw h-dvh fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-pointer
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${drawerController} fixed top-0 right-0 bg-white`}
      >
        <div className={`${childrenClassName} h-screen`}>{children}</div>
      </div>
    </div>
  );
};

export default CustomGlobalDrawer;
