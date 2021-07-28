import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en gifexpertApp', () => {
    
    test('testeando gifExpertApp ', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias ', () => {
        
        const categories = ["Naruto", "Dragon Ball"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);

    });
    
})
