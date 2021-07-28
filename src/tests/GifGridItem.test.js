import { shallow } from "enzyme"
import { GifGridItem } from "../components/GifGridItem"

describe('Mostrar el componente Correctamente GifGridItem', () => {
    
    const titulo = "un titulo";
    const url = "https://localhost/algo.jpg";

    let wrapper = shallow(<GifGridItem title={titulo} url={url}/>);
   
    
    test('Componente GifGridItem ', () => {

      //  console.log(wrapper.props());
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo ', () => {

        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(titulo);
    });

    test('debe tener imagen igual al url y alt de los props ', () => {
        
        const img = wrapper.find("img");
        //console.log(img.props("src"));

        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(titulo);
    });
    test('debe tener card animate__fadeInUpBig ', () => {
        
        const div = wrapper.find("div");

        expect(div.prop("className")).toBe("card animate__fadeInUpBig");
        
    });
    
    
    
    
})
