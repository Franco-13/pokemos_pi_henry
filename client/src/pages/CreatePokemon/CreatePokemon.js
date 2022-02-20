import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postPokemon } from "../../actions";
import { GlobalButton } from "../../components/GlobalButton/GlobalButton";
import { COLOR_SECONDARY } from "../../styles/global";
import { CheckSection, FormPoke, HeaderCreatePokemon, InputSection } from "./styles";
import { GlobalInput } from './../../components/GlobalInput/GlobalInput';

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typess = useSelector((state) => state.types);
  const types = typess.map((type) => type.name)
  console.log("types", types);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
    pokemonCreadoDB: true,
  });

/*   useEffect(() => {
    dispatch(postPokemon());
  }, [dispatch]); */

  const handleChange = (e) => {
    e.preventDefault(e)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeInputCheck = (e) => {
    //e.preventDefault()
    if (input.types.includes(e.target.value)) {
      setInput({
        ...input,
        types: input.types.filter(t => t !== e.target.value)
      })
    }else{
      setInput({
        ...input,
        types: [...input.types, e.target.value]
      })
    }
/*     if (e.target.checked) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    }
    if (!e.target.checked) {
      input.types.splice(input.types.indexOf(e.target.value), 1);
      setInput({
        ...input,
    }); 
  }*/
}

  const handleSubmit = (e) => {
    e.preventDefault(e)
    //dispatch(postPokemon(input));
    alert("Pokemon creado")
    setInput({
      name: "",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
      pokemonCreadoDB: true,
    })
  }

  return (
    <div>
      <HeaderCreatePokemon>
        <Link to="/home">
          <GlobalButton
            textBtn="Regresar"
            colorBtn={COLOR_SECONDARY}
          />
        </Link>
      </HeaderCreatePokemon>
      <FormPoke onSubmit={(e) => handleSubmit(e)}>
        <InputSection>        
          <GlobalInput
            type="text"
            name="name"
            onChange={handleChange}
            value={input.name}
            placeholder="Ingrese un nombre"
            label={true}
            labelTitle="Nombre"
          />
          <GlobalInput
            type="text"
            name="image"
            onChange={handleChange}
            value={input.image}
            placeholder="Ingrese una direccion de imagen"
            label={true}
            labelTitle="Imagen"
          />
          <GlobalInput
            type="number"
            name="hp"
            onChange={handleChange}
            value={input.hp}
            placeholder="Ingrese un número positívo"
            label={true}
            labelTitle="Vida"
          />
          <GlobalInput
            type="number"
            name="attack"
            onChange={handleChange}
            value={input.attack}
            placeholder="Ingrese un número positívo"
            label={true}
            labelTitle="Ataque"
          />
          <GlobalInput
            type="number"
            name="defense"
            onChange={handleChange}
            value={input.defense}
            placeholder="Ingrese un número positívo"
            label={true}
            labelTitle="Defensa"
          />
          <GlobalInput
            type="number"
            name="speed"
            onChange={handleChange}
            value={input.speed}
            placeholder="Ingrese un número positívo"
            label={true}
            labelTitle="Velocidad"
          />
          <GlobalInput
            type="number"
            name="height"
            onChange={handleChange}
            value={input.height}
            placeholder="Ingrese un número positívo"
            label={true}
            labelTitle="Altura"
          />
          <GlobalInput
            type="number"
            name="weight"
            onChange={handleChange}
            value={input.weight}
            placeholder="Ingrese un número positívo"
            label={true}
            labelTitle="Peso"
          />
        </InputSection>
        <CheckSection>

          {types?.map((el, i) => (
            <label key={el+i}>
              <input onChange={handleChangeInputCheck} type="checkbox" name={el} value={el} />
              {el}
            </label>
          ))}
        </CheckSection>
        <GlobalButton
          type="submit"
          textBtn="Crear"
          colorBtn={COLOR_SECONDARY}
        />
      </FormPoke>
    </div>
  );
};
