import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'App.css'
import DatePickers from 'components/DatePickers'

const App = (): JSX.Element => (
    <MuiThemeProvider>
        <div className="App">
            <div className="container flex-centered">
                <DatePickers />
            </div>
        </div>
    </MuiThemeProvider>
)

export default App
