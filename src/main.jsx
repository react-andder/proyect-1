import { createRoot } from 'react-dom/client';
import './index.css';

const app = <h1>Hola </h1>;
const container = document.getElementById('root');

createRoot(container).render(app);
