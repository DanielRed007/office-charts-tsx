export const calculateTriColorAverage = (set: number) => {
  if (set < 33) {
    return "#DE3F00";
  }
  if (set > 33 && set < 66) {
    return "#D6B300";
  }
  if (set > 66 && set <= 99) {
    return "#26B000";
  }
  return "#f5f5f5";
};

export const calculateFifthColorAverage = (set: number) => {
  if (set >= 0 && set < 20) {
    return "#B61900";
  }
  if (set >= 20 && set < 40) {
    return "#FA1900";
  }
  if (set >= 40 && set < 60) {
    return "#E8B20C";
  }
  if (set >= 60 && set < 80) {
    return "#21B500";
  }
  if (set >= 80 && set <= 99) {
    return "#198A00";
  }
  return "#f5f5f5";
};
