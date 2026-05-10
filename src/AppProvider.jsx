import { HelmetProvider } from 'react-helmet-async';

export default function AppProvider({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
