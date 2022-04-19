import { useState } from 'react'
import DatePicker from 'material-ui/DatePicker'

const DatePickers = (): JSX.Element => {
    const [currentDate, setCurrentDate] = useState<Date | undefined>(undefined)

    const handleChange = (e: Event, date: Date): void => {
        setCurrentDate(date)
    }

    return (
        <>
            <DatePicker hintText="Date picker №1" value={currentDate} onChange={handleChange} />
            <DatePicker hintText="Date picker №2" value={currentDate} onChange={handleChange} />
        </>
    )
}

export default DatePickers
