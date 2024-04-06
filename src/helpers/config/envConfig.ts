export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://62.171.145.157:5000/api/v1"
    // process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.0.176:5000/api/v1"
  );
};
