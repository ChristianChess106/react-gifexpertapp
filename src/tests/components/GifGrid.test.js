import React from "react";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('pruebas con gifgrid', () => {

    const category = "Goku";
   
    //let wrapper = shallow(<GifGrid category={category}/>);
    test('testeando el componente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

     test('mostrar items cuando se cargan imagenes useFetchGifs ', () => {

        const gifs = [{
            id: "ABC",
            title: "el araña",
            url: "https://localhost.jpg"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
       const wrapper = shallow(<GifGrid category={category}/>);

       expect(wrapper.find("p").exists()).toBe(false);
       expect(wrapper.find("GifGridItem").length).toBe(gifs.length);

      
        
    }); 
    
    
})
