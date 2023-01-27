const formatNumber = (
  number: number | bigint,
  options?: Intl.NumberFormatOptions
) =>
  new Intl.NumberFormat("pt-BR", {
    ...(options || {}),
  }).format(number);

export const formatCurrency = (
  number?: number | bigint | null,
  options?: Intl.NumberFormatOptions
) =>
  formatNumber(number || 0, {
    style: "currency",
    currency: "BRL",
    maximumSignificantDigits: 3,
    ...(options || {}),
  });
