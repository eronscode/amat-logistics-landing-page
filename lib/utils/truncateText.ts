export const truncateText = (text = "", delimeter = 100) => {
  if (!text) return;
  console.log(text.length, "io")
  return text.substring(0, delimeter) + (text.length > delimeter ? "..." : "");
};
