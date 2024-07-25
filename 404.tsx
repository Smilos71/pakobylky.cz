import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Přesměrování na domovskou stránku
    router.replace('/');
  }, [router]);

  return null; // Můžete také vrátit prázdný `<div>` nebo jiný element, pokud chcete něco zobrazit během přesměrování
};

export default Custom404;
