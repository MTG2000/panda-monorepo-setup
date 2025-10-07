import './App.css'
import { css, cx } from '#ui-lib/css'
import { Stack } from '#ui-lib/jsx'
import { button } from '#ui-lib/recipes'
import { Button } from 'panda-mono-with-import-map-ui-lib'
import { token } from '#ui-lib/tokens'

function App() {
  return (
    <>
      <h1 className={css({ 
          fontSize: '4xl', 
          lineHeight: '1.1', 
          border: `1px solid ${token('colors.amber.300')}`, // This doesn't work
          // border: `1px solid token(colors.amber.500)` // This works
       })}>Hello from Panda 🐼</h1>
      <h2 className={css({ fontSize: '2xl', my: 4, color: 'yellow.400' })}>module-resolution/with-import-map</h2>
      <Stack>
        <Button visual="funky" shape="square" size="lg">
          Button component from ui-lib
        </Button>
        <button className={cx(button(), css({ bgColor: 'teal.400', color: 'rgba(0, 0, 0, 0.8)', fontWeight: 'bold' }))}>
          button recipe from ui-lib, with local overrides
        </button>
      </Stack>
    </>
  )
}

export default App
