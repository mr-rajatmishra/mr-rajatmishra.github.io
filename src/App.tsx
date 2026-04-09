import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            {/* other components */}
        </BrowserRouter>
    );
}

export default App;