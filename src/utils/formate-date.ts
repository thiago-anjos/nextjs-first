function formatDate(date: string): string {
  if (!date) return;
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}

export default formatDate;
