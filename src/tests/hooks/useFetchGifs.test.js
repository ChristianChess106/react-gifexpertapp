import { useFetchGifs } from "../../hooks/useFetchGifs";
//import "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial ', async() => {
        
       // const {data,loading} = useFetchGifs("Naruto");

       const {result,waitForNextUpdate}= renderHook( () => useFetchGifs("Naruto"));
       
       const {data,loading} = result.current;

       await waitForNextUpdate(6000);

      
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('debe retornar un arreglo de imagenes y loadin en false ', async() => {
        
        const {result,waitForNextUpdate}= renderHook( () => useFetchGifs("Naruto"));
        
        await waitForNextUpdate(3000);
        const {data,loading} = result.current;
       
        expect(data.length).toBe(8);
        expect(loading).toBe(false);

    });
    
})
