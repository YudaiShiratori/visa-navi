/**
 * 文字列を大文字に変換します
 */
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

/**
 * 文字列を小文字に変換します
 */
export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

/**
 * 文字列の最初の文字を大文字にします
 */
export function capitalize(str: string): string {
  if (!str || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 文字列が指定された最大長を超える場合、省略記号を追加して切り詰めます
 */
export function truncate(str: string, maxLength: number, ellipsis = "..."): string {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + ellipsis;
}

/**
 * 文字列が有効なURLかどうかを検証します
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
