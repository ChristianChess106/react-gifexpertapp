import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs Fetch', () => {
    
    test('Probando el get de los elementos ', async() => {
        
      const gifs = await getGifs("Naruto");

       expect(gifs.length).toBe(8);
    });

     
    test('Probando el get de los elementos sin categoria ', async() => {
        
        const gifs = await getGifs("");
  
         expect(gifs.length).toBe(0);
      });
    
})
