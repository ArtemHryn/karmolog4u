export const generateColorFromInitials = initials => {
  const colors = ['#fdd3a2', '#d7ff94', '#bae6ff', '#fff394', '#beffec'];
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};
