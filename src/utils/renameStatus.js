/**
 * Rename status for labels
 * @returns status string
 */
export default function renameStatus(statusDb) {
  switch (statusDb) {
    case 'pending':
      return 'Başvurunuz inceleniyor.';
    case 'approve':
      return 'Başvurunuz onaylandı.';
    case 'reject':
      return 'Başvurunuz reddedildi.';
    default:
      return 'error';
  }
}
