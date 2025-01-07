export function PriceFormat(value: number) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
