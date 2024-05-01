export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const formatDateShorting = (dateString: string) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  if (daysDifference >= 2) {
    return `${daysDifference} days ago`;
  } else if (daysDifference === 1) {
    return "1 day ago";
  } else if (hoursDifference >= 2) {
    return `${hoursDifference} hours ago`;
  } else if (hoursDifference === 1) {
    return "1 hour ago";
  } else if (minutesDifference >= 2) {
    return `${minutesDifference} minutes ago`;
  } else if (minutesDifference === 1) {
    return "1 minute ago";
  } else {
    return "Just now";
  }
};
