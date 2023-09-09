export function getSubstring(str, limit = 10, dots = true) {
  if (!str?.length) return "";
  if (str.length > limit) {
    if (!limit) return str
    str = str.substring(0, limit) + (dots ? "..." : "");
  }

  return str;
}
