import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;YeaMovie&raquo; 18+ <br />
        Сайт создан исключительно в обучающих целях. <br />
      </Typography>

      <Typography>YeaMovie</Typography>
    </Stack>
  )
}
