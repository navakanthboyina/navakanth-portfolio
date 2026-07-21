export function withBasePath(path: string): string {
  if (!path) {
    return process.env.NEXT_PUBLIC_BASE_PATH || "/";
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

export function isPlaceholderUrl(url?: string): boolean {
  if (!url) {
    return true;
  }

  return url.startsWith("YOUR_") || url.includes("YOUR_GITHUB_USERNAME");
}

export function createMailto(email: string): string {
  const subject = encodeURIComponent("Opportunity for Navakanth Boyina");
  return `mailto:${email}?subject=${subject}`;
}

export function uniqueItems(items: string[]): string[] {
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
}
