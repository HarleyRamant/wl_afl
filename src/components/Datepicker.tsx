import React from 'react'
import { DateInput } from '@mantine/dates'
import { ActionIcon } from '@mantine/core'
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'
import updateLocale from 'dayjs/plugin/updateLocale'
import dayjs from 'dayjs'
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
    weekdays: [
        "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"
    ]
})

function Datepicker({value, onChange}) {

    function prevDay(){
        let prev = new Date(value)
        prev = new Date(prev.setDate(prev.getDate() -1));
        onChange(prev);
    }

    function nextDay(){
        let next = new Date(value)
        next = new Date(next.setDate(next.getDate() +1));
        onChange(next);
    }

    const styles = {
        input: {
            textAlign: "center"
        }
    };


  return (
    <div className='flex flex-row w-fit content-center flex-wrap'>
        <ActionIcon size='lg' className='m-auto' onClick={prevDay}>
          <IconCaretLeftFilled />
        </ActionIcon>
        <DateInput className='flex-1' value={value} onChange={onChange} valueFormat="dddd DD/MM/YYYY" styles={styles}/>
        <ActionIcon size='lg' className='m-auto' onClick={nextDay}>
          <IconCaretRightFilled />
        </ActionIcon>
      </div>
  )
}

export default Datepicker