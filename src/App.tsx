import { useState } from 'react'

import { DateInput } from '@mantine/dates'
import { Button } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { IconPrinter, IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'

function App() {


  return (
    <>
      <div className='flex py-8 pl-8 flex-row w-96 content-center flex-wrap'>
        <ActionIcon color="black" size='lg' className='m-auto' autoContrast={true}>
          <IconCaretLeftFilled />
        </ActionIcon>
        <DateInput className='flex-1' />
        <ActionIcon color="black" size='lg' className='m-auto'>
          <IconCaretRightFilled />
        </ActionIcon>
      </div>
      <ActionIcon>
        <IconPrinter />
      </ActionIcon>

      <Button>Test</Button>
    </>
  )
}

export default App
