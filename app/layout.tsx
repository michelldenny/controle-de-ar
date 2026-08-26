import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Controle de AR', description: 'Cadastro e recebimento de Avisos de Recebimento' };
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
