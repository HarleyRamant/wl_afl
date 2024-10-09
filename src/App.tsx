import { useState } from 'react'

import { DateInput } from '@mantine/dates'
import { Button } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { IconPrinter, IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'
import Datepicker from './components/Datepicker'

function App() {

  const [date, setDate] = useState(new Date());


  return (
    <div className='flex flex-col p-8 gap-8'>
      <div className='flex flex-row justify-between'>
        <Datepicker value={date} onChange={setDate} />
        <ActionIcon size="lg">
          <IconPrinter />
        </ActionIcon>
      </div>
    </div>
  )
}

export default App
