import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { getPokemons, postPokemon, reset } from "../../actions";
import { GlobalButton } from "../../components/GlobalButton/GlobalButton";
import { COLOR_LIGHT, YELLOW_PIKACHU } from "../../styles/global";
import { CheckSection, ContainerCreated, FormContainer, FormPoke, HeaderCreatePokemon, InputSection/* , Modal */ } from "./styles";
import { GlobalInput } from './../../components/GlobalInput/GlobalInput';
import { validateInputs } from "./validates";
import { Modal } from "../../components/Modal/Modal";

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typess = useSelector((state) => state.types);
  const postMsg = useSelector((state) => state.postMsg)
  const types = typess.map((type) => type.name)
  let navigate = useNavigate();

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
      setErrors(validateInputs({
        ...input,
        types: input.types.filter(t => t !== e.target.value)
      }))
    }else{
      setInput({
        ...input,
        types: [...input.types, e.target.value]
      })
      setErrors(validateInputs({
        ...input,
        types: [...input.types, e.target.value]
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPokemon(input));
    if(postMsg !== null && postMsg.message === "Pokemon creado con éxito"){
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
    setInfoCreatedModal(true)
  }
  
  const click = (e) => {
    e.preventDefault()
    setInfoCreatedModal(false)
    if (postMsg !== null && postMsg.message === "Pokemon creado con éxito") {
      dispatch(reset())
      dispatch(getPokemons())
      navigate("/home")
    }
  }

  let disabledBtn = input.name.length === 0 || Object.keys(errors).length

  return (
    <ContainerCreated>
      <HeaderCreatePokemon>
        <Link to="/home">
          <GlobalButton
            textBtn="Regresar"
            fontColor="black"
            colorBtn={YELLOW_PIKACHU}
          />
        </Link>
      </HeaderCreatePokemon>
      <FormContainer>

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
                min="0"
                max="252"
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
                  <input onChange={handleChangeInputCheck} type="checkbox" name={el} value={el}/>
                  {el}
                </label>
              ))
            }
            {!errors.types ? null : <span>{errors.types}</span>}  
          </CheckSection>
          <GlobalButton
            type="submit"
            textBtn="Crear"
            fontColor="black"
            colorBtn={disabledBtn ? COLOR_LIGHT : YELLOW_PIKACHU}
            disabledState={disabledBtn ? true : false}
          />
        </FormPoke>
      </FormContainer>
      <Modal 
        onClick={click} 
        visible={infoCreatedModal}
        modalMessage={postMsg !== null && postMsg.message}
      />
    </ContainerCreated>
  );
};