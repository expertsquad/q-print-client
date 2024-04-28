import GlobalLoader from "@/components/shared/GlobalLoader";


const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <GlobalLoader />
    </div>
  );
};

export default loading;
