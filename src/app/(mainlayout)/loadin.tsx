const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {["L", "O", "A", "D", "I", "N", "G", ".", ".", "."].map(
        (letter, index) => (
          <span key={index} className="text-4xl font-bold">
            {letter}
          </span>
        )
      )}
    </div>
  );
};

export default Loading;
