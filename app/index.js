import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>HackerNews Clone</h1>
            </div>
        )
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)

