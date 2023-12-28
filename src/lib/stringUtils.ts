export function titleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );
}
