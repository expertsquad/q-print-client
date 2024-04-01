export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

// export const formatDateShorting = (dateString: string) => {
//   const date = new Date(dateString);
//   const currentDate = new Date();
//   const timeDifference = currentDate.getTime() - date.getTime();
//   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   if (daysDifference === 1) {
//     return "1 day ago";
//   } else if (daysDifference > 1) {
//     return `${daysDifference} days ago`;
//   } else {
//     return "Today";
//   }
// };

export const formatDateShorting = (dateString: string) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (daysDifference >= 2) {
    return `${daysDifference} days ago`;
  } else if (daysDifference === 1) {
    return "1 day ago";
  } else if (hoursDifference >= 2) {
    return `${hoursDifference} h ago`;
  } else if (hoursDifference === 1) {
    return "1 hour ago";
  } else {
    return "Just now";
  }
};
