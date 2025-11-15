import { format } from 'date-fns';

export const formatDate = (date: Date): string => format(date, 'yyyy-MM-dd HH:mm:ss.sss');
export const formatDateToDisplay = (date: Date): string => format(date, 'dd/MM/yyyy');
export const formatHourToDisplay = (date: Date): string => format(date, 'HH:mm');
export const formatAmountsInCents = (amountInCents: number): number => Number((amountInCents / 100).toFixed(2));
