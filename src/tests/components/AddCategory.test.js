import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrarse correctamente ', () => {
        
        

        expect(wrapper).toMatchSnapshot();
    });
    
    test('evaluar cambios en caja de texto ', () => {
        
        const input = wrapper.find("input");
        const value = "hola mundo";

        input.simulate("change", {target :{value}});
    });
    
    test('no debe de postear la informacion', () => {
       
        wrapper.find("form").simulate("submit", {preventDefault: () => {}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el SetCategories y limpiar la caja de de texto ', () => {

        //simular el input change
        //simular submit
        //setCategories se debe de haber llamado
        //el valor del input debe de estar ""

        const input = wrapper.find("input");
        const value = "Ejemplo";

        input.simulate("change",{target:{value}});

        wrapper.find("form").simulate("submit",{preventDefault: () => {}});

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop("value")).toBe("");
        
    });
    
    
})
