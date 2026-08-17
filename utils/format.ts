const ACRONYMS = new Set(["cpu", "gb", "tb", "ram", "ssd", "hdd", "os", "id"]);

export function formatLabel(key: string): string {
  return key
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_]+/)
    .filter(Boolean)
    .map((word) => {
      const lowerWord = word.toLowerCase();

      if (ACRONYMS.has(lowerWord)) {
        return lowerWord.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function formatPrice(value: unknown): string | null {
  const amount =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value.trim())
        : Number.NaN;

  if (!Number.isFinite(amount)) {
    return null;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "—";
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "—";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (typeof value === "string") {
    return value;
  }

  return String(value);
}
