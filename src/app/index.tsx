import { Provider } from 'react-redux'
import { Routing } from './routes'
import { store } from './store'

export default function App() {
    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    )
}
