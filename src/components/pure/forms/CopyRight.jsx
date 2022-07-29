import React from 'react'
import {  } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'

const CopyRight = () => {
  return (
    <div>
        <Typography variant='body2' color='GrayText' align='center'>
            { 'copyright (c)'}
            <Link color='inherit' href={'http://www.imaginaformacion.com'}>Imagina Formacion </Link>
        </Typography>
    </div>
  )
}

export default CopyRight