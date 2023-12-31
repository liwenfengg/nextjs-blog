import {parseISO, format} from 'date-fns'
import {zhCN} from 'date-fns/locale'

export default function Date({dateString}: { dateString: string }) {
  const date = parseISO(dateString)

  return <time dateTime={dateString}>{format(date, 'LLLL dd, yyyy', {locale: zhCN})}</time>
}
