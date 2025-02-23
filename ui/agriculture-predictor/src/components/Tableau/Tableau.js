import { useRef, useEffect } from 'react';

export const Tableau = () => {
  const ref = useRef(null);
  const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";

  useEffect(() => {
    if (window.tableau && ref.current) {
      const existingViz = ref.current.tableauViz;
      if (existingViz) {
        existingViz.dispose();  
      }

      const viz = new window.tableau.Viz(ref.current, url);
      ref.current.tableauViz = viz;
    } else {
      console.error('Tableau JS API not loaded or div not available');
    }

    return () => {
      const existingViz = ref.current?.tableauViz;
      if (existingViz) {
        existingViz.dispose(); 
      }
    };
  }, []); 

  return (
    <div ref={ref} style={{ width: '70%', margin: 'auto' }}></div>
  );
};
