const SPANISH_COUNTRIES = new Set([
  "CO", "MX", "ES", "AR", "CL", "PE", "EC", "VE", "UY", "PY",
  "BO", "CR", "CU", "DO", "SV", "GT", "HN", "NI", "PA", "PR", "GQ",
]);

export type Locale = "es" | "en";

export async function detectLanguageFromIP(): Promise<Locale> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return detectFromBrowser();
    const data = await res.json();
    const countryCode: string = data.country_code || "";
    return SPANISH_COUNTRIES.has(countryCode.toUpperCase()) ? "es" : "en";
  } catch {
    return detectFromBrowser();
  }
}

function detectFromBrowser(): Locale {
  if (typeof navigator === "undefined") return "es";
  const lang = navigator.language || "";
  return lang.startsWith("es") ? "es" : "en";
}
