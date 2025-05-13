import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'

dayjs.extend(relativeTime)
dayjs.locale('es')

interface Props {
    fechaISO: string;
}

export default function FechaRelativa({ fechaISO }: Props) {  
  const [relativa, setRelativa] = useState('')

  useEffect(() => {
    const fecha = dayjs(fechaISO)
    const ahora = dayjs()
    const horas = ahora.diff(fecha, 'hour')

    if (horas < 1) {
      setRelativa(fecha.fromNow()) // minutos
    } else if (horas < 24) {
      setRelativa(fecha.fromNow()) // horas
    } else {
      setRelativa(fecha.format('D [de] MMMM [de] YYYY'))// , HH:mm si quiero cambiar a la fecha y hora que se muestre esto
    }
  }, [fechaISO])

  return <span className="text-gray-500">{relativa}</span>
}
