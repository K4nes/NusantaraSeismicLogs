export function magnitudeStyle(magnitude) {
  const val = parseFloat(magnitude);
  if (isNaN(val)) return "text-white border";

  if (val < 2.0) {
    return {
      text: "text-normal",
    };
  }
  if (val <= 3.9) {
    return {
      text: "text-advisory",
    };
  }
  if (val <= 4.9) {
    return {
      text: "text-watch",
    };
  }
  if (val <= 5.9) {
    return {
      text: "text-warning",
      bg: "bg-warning/30"
    };
  }
  if (val <= 6.9) {
    return {
      text: "text-danger",
    };
  }

  return { text: "text-critical" };
}
