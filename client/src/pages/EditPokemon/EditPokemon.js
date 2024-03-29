import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useParams} from "react-router-dom";
import { updatePokeDB, reset, getPokemonsById, getPokemons } from "../../actions";
import { GlobalButton } from "../../components/GlobalButton/GlobalButton";
import { COLOR_LIGHT, YELLOW_PIKACHU } from "../../styles/global";
import { CheckSection, ContainerCreated, FormContainer, FormPoke, HeaderEditPokemon, InputSection } from "./styles";
import { GlobalInput } from './../../components/GlobalInput/GlobalInput';
import { validateInputs } from "./../CreatePokemon/validates";
import { Modal } from "../../components/Modal/Modal";

export const EditPokemon = () => {
  const dispatch = useDispatch();
  const detPoke = useSelector((state) => state.detailsPoke)
  const allPokes = useSelector((state) => state.pokemons)
  let {id} = useParams()
  const dbPokes = allPokes.filter(el => el.pokemonCreadoDB)
  
  const tipos = detPoke?.types?.map((el) => el.name)
  const typess = useSelector((state) => state.types);
  const typesNameState = typess.map((type) => type.name)

  const [input, setInput] = useState({
    id:id,
    name: detPoke?.name,
    image: detPoke?.image,
    hp: detPoke?.hp,
    attack: detPoke?.attack,
    defense: detPoke?.defense,
    speed: detPoke?.speed,
    height: detPoke?.height,
    weight: detPoke?.weight,
    types: tipos,
  });

  const [errors, setErrors] = useState({});
  const [infoEditModal, setInfoEditModal] = useState(false)

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

  const [msg, setMsg] = useState("")

  const handleSubmit = (e) => {
  e.preventDefault()
  //console.log("upd",pokeUpdate);
  const find = dbPokes.find(el => el.name === input.name)
  //console.log("smt find",find?.id,"name "+input.name,"ID "+ id);
  if (find && find.id !== id) {
    setMsg("Ya existe un pokemon con el nombre ingresado")
  }else{
    dispatch(updatePokeDB(input));
    setMsg("Pokemon actualizado con éxito")
  }
  setInfoEditModal(true)
  }
  
  const click = (e) => {
    e.preventDefault()
    if (msg === "Pokemon actualizado con éxito") {
      dispatch(reset())
      dispatch(getPokemons())
      dispatch(getPokemonsById(id))
    }
    setInfoEditModal(false)
  }

  let disabledBtn = input.name.length === 0 || Object.keys(errors).length

  return (
    <ContainerCreated>
      <HeaderEditPokemon>
      <Link to={`/detail/${id}`}>
        <GlobalButton
          textBtn="Regresar"
          fontColor="black"
            colorBtn={YELLOW_PIKACHU}
          //onClick={()=>dispatch(getPokemonsById(id))}
        />
      </Link>
      </HeaderEditPokemon>
      <FormContainer>
        <FormPoke onSubmit={handleSubmit} /* action="PUT" */>
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
              typesNameState?.map((el, i) => (
                <label key={el+i}>
                  <input onChange={handleChangeInputCheck} type="checkbox" checked={input.types.includes(el)} name={el} value={el}/>
                  {el}
                </label>
              ))
            }
            {!errors.types ? null : <span>{errors.types}</span>}  
          </CheckSection>
          <GlobalButton
            type="submit"
            textBtn="Actualizar"
            fontColor="black"
            colorBtn={disabledBtn ? COLOR_LIGHT : YELLOW_PIKACHU}
            disabledState={disabledBtn ? true : false}
          />
        </FormPoke>
      </FormContainer>
      <Modal 
        onClick={click} 
        visible={infoEditModal}
        modalMessage={msg}
      />
    </ContainerCreated>
  );
};