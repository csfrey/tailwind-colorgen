import convert from "color-convert";

/**
 * Calculate a new color on the color wheel
 * @param hex color in hex representation
 * @param offset degrees of difference on the color wheel
 */
export function calculateColor(hex: string, offset: number): string {
  const hsl = convert.hex.hsl(hex);
  hsl[0] += offset;
  if (hsl[0] < 0) hsl[0] += 360;
  if (hsl[0] >= 360) hsl[0] -= 360;
  return `#${convert.hsl.hex(hsl)}`;
}

function calculateLightness(hex: any, shade: number) {
  const hsl = convert.hex.hsl(hex);
  const l = (hsl[2] * (1000 - shade)) / 900;
  return `#${convert.hsl.hex([hsl[0], hsl[1], l])}`;
}

export function calculateNumericShades(hex: string): Map<number, string> {
  const shadesMap = new Map<number, string>();

  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(
    (s: number) => {
      shadesMap.set(s, calculateLightness(hex, s));
    }
  );

  return shadesMap;
}

export function calculateSemanticShades(hex: string): Map<string, string> {
  return new Map<string, string>([
    ["lighter", calculateLightness(hex, 100)],
    ["light", calculateLightness(hex, 300)],
    ["normal", calculateLightness(hex, 500)],
    ["dark", calculateLightness(hex, 700)],
    ["darker", calculateLightness(hex, 900)],
  ]);
}
