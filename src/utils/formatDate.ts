export const formatDate = (dateString: string | Date) => {
  // return new Date(dateString).toISOString().split("T")[0];
  return new Date(dateString).toLocaleDateString('en-NP')
};
