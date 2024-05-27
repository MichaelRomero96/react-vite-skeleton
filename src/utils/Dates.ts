import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

class Dates {
  static esFormat(date: string): string {
    if (date === null) return 'Fecha no disponible';
    const isoDate = parseISO(date);
    const formattedDate = format(isoDate, "dd 'de' MMMM 'de' yyyy", {
      locale: es,
    });
    if (formattedDate === 'Invalid Date') {
      return '';
    }
    return formattedDate;
  }
}

export default Dates;
