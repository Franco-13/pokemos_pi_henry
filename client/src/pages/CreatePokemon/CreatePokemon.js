import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, postPokemon, reset } from "../../actions";
import { GlobalButton } from "../../components/GlobalButton/GlobalButton";
import { COLOR_LIGHT, COLOR_SECONDARY } from "../../styles/global";
import { CheckSection, ContainerCreated, FormPoke, HeaderCreatePokemon, InputSection, Modal } from "./styles";
import { GlobalInput } from './../../components/GlobalInput/GlobalInput';

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typess = useSelector((state) => state.types);
  const {message} = useSelector((state) => state.postMsg)
  const types = typess.map((type) => type.name)
  //console.log("types", types);

  function validateInputs(input) {
    let errors = {};
    let validImg = /^.*\.(jpg|jpeg|png|gif)$/;
    if (!input.name) {
      errors.name = "Ingrese un nombre para el pokemon"
    } else if (!/\S+@\S+\.\S+/.test(input.name)) {
      errors.name = "El nombre solo debe contener letras"
    }
    if (input.types.length > 2) {
      errors.types = "Solo puede asignar hasta dos tipos"
    }
    if (Number(input.hp) > 252) {
      errors.hp = "El valor vida no puede ser mayor a 255"
    }
    if (!validImg.test(input.image)) {
      errors.image = "La imagen debe ser '.jpg', '.jpeg', '.png' ó '.gif' "
    }
    return errors;
  }

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
  const [errors, setErrors] = useState({});
  const [infoCreatedModal, setInfoCreatedModal] = useState(false)
  const [check, setCheck] = useState()

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validateInputs({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleChangeInputCheck = (e) => {
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
    setErrors(validateInputs({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPokemon(input));
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
    setCheck(false)
    setInfoCreatedModal(true)
  }

  const click = (e) => {
    e.preventDefault()
    setInfoCreatedModal(false)
    dispatch(reset())
    dispatch(getPokemons())
  }

  return (
    <ContainerCreated>
      <HeaderCreatePokemon>
        <Link to="/home">
          <GlobalButton
            textBtn="Regresar"
            colorBtn={COLOR_SECONDARY}
          />
        </Link>
      </HeaderCreatePokemon>
      <FormPoke onSubmit={handleSubmit} action="POST">
        <InputSection> 
          <div>
            <GlobalInput
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={input.name}
              placeholder="Ingrese un nombre"
              label="name"
              labelTitle="Nombre"
            />
            {!errors.name ? null : <span>{errors.name}</span>}
          </div>
          <div> 
            <GlobalInput
              id="image"
              type="text"
              name="image"
              onChange={handleChange}
              value={input.image}
              placeholder="Ingrese una direccion de imagen"
              label="image"
              labelTitle="Imagen"
            />
            {!errors.image ? null : <span>{errors.image}</span>}
          </div>
          <div>       
          <GlobalInput
            id="hp"
            type="number"
            name="hp"
            onChange={handleChange}
            value={input.hp}
            placeholder="Ingrese un número positívo"
            label="hp"
            labelTitle="Vida"
            min="0"
            max="252"
          />
          {!errors.hp ? null : <span>{errors.hp}</span>}
        </div>
        <div>
          <GlobalInput
            id="attack"
            type="number"
            name="attack"
            onChange={handleChange}
            value={input.attack}
            placeholder="Ingrese un número positívo"
            label="attack"
            labelTitle="Ataque"
          />
          {!errors.attack ? null : <span>{errors.attack}</span>}
        </div>
        <div>
          <GlobalInput
            id="defense"
            type="number"
            name="defense"
            onChange={handleChange}
            value={input.defense}
            placeholder="Ingrese un número positívo"
            label="defense"
            labelTitle="Defensa"
            min="0"
            max="252"
          />
          {!errors.defense ? null : <span>{errors.defense}</span>}
        </div>
        <div>
          <GlobalInput
            id="speed"
            type="number"
            name="speed"
            onChange={handleChange}
            value={input.speed}
            placeholder="Ingrese un número positívo"
            label="speed"
            labelTitle="Velocidad"
            min="0"
            max="252"
          />
          {!errors.speed ? null : <span>{errors.speed}</span>}
        </div>
        <div>
          <GlobalInput
            id="height"
            type="number"
            name="height"
            onChange={handleChange}
            value={input.height}
            placeholder="Ingrese un número positívo"
            label="height"
            labelTitle="Altura"
            min="0"
            max="100"
          />
          {!errors.height ? null : <span>{errors.height}</span>}
        </div>
        <div>  
          <GlobalInput
            id="weight"
            type="number"
            name="weight"
            onChange={handleChange}
            value={input.weight}
            placeholder="Ingrese un número positívo"
            label="weight"
            labelTitle="Peso"
            min="0"
            max="1000"
          />
          {!errors.weight ? null : <span>{errors.weight}</span>}
        </div>
        </InputSection>
        <CheckSection>
          {
            types?.map((el, i) => (
              <label key={el+i}>
                <input onChange={handleChangeInputCheck} type="checkbox" name={el} value={el} checked={check}/>
                {el}
              </label>
            ))
          }
          
          {!errors.types ? null : <span>{errors.types}</span>}
        </CheckSection>
        <GlobalButton
          type="submit"
          textBtn="Crear"
          colorBtn={!input.name.length ? COLOR_LIGHT :COLOR_SECONDARY}
          disabledState={!input.name.length ? true : false}
        />
      </FormPoke>
      <Modal onClick={click} visible={infoCreatedModal}  className ="active">
              <div>
                  <h3>{message}</h3>
              </div>
      </Modal>
    </ContainerCreated>
  );
};
