import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useNavigate, useParams} from "react-router-dom";
import { updatePokeDB, reset, getPokemonsById } from "../../actions";
import { GlobalButton } from "../../components/GlobalButton/GlobalButton";
import { COLOR_LIGHT, YELLOW_PIKACHU } from "../../styles/global";
import { CheckSection, ContainerCreated, FormPoke, HeaderCreatePokemon, InputSection, Modal } from "./styles";
import { GlobalInput } from './../../components/GlobalInput/GlobalInput';
import { validateInputs } from "./../CreatePokemon/validates";

export const EditPokemon = () => {
  const dispatch = useDispatch();
  const {name, hp, attack, defense, speed, height, weight, image, types} = useSelector((state) => state.detailsPoke)
  const allPokes = useSelector((state) => state.pokemons)
  let {id} = useParams()
  const dbPokes = allPokes.filter(el => el.pokemonCreadoDB)
  console.log("17DBPokes",dbPokes);
  const tipos = types?.map((el) => el.name)
  const typess = useSelector((state) => state.types);
  const typesNameState = typess.map((type) => type.name)
  let navigate = useNavigate();

  const [input, setInput] = useState({
    id:id,
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types: tipos,
  });
  console.log("DET INPUT",input);
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

/*   const pokesFind = dbPokes?.filter(el => el.name.toLowerCase() === input.name.toLowerCase())
  console.log("find",pokesFind) */
  const [msg, setMsg] = useState("")
  //let msg = ""
  const handleSubmit = (e) => {
    e.preventDefault()
    for (let i = 0; i < dbPokes.length; i++) {
      console.log("FOR",dbPokes);
      if (dbPokes[i].id === id && dbPokes[i].name === input.name.toLowerCase()) {
        setMsg("Pokemon actualizado con éxito")
      } else if ( dbPokes[i].id !== id && dbPokes[i].name === input.name.toLowerCase()){
        setMsg("Ya existe un pokemon con el nombre ingresado")
      } else if ( dbPokes[i].id !== id && dbPokes[i].name !== input.name.toLowerCase()){
        setMsg("Pokemon actualizado con éxito")
      }
    }
    console.log("MSG FOR", msg);
    if (msg === "Pokemon actualizado con éxito") {
      dispatch(updatePokeDB(input));
    }
    setInfoCreatedModal(true)
  }
  
  const click = (e) => {
    e.preventDefault()
    setInfoCreatedModal(false)
    if (msg === "Pokemon actualizado con éxito") {
      dispatch(reset())
      dispatch(getPokemonsById(id))
      setTimeout(() => {
        navigate(`/detail/${id}`)
      }, 2000)
    }
  }

  let disabledBtn = input.name.length === 0 || Object.keys(errors).length

  return (console.log(msg),
    <ContainerCreated>
      <HeaderCreatePokemon>
      <Link to={`/detail/${id}`}>
        <GlobalButton
          textBtn="Regresar"
          fontColor="black"
            colorBtn={YELLOW_PIKACHU}
          onClick={()=>dispatch(getPokemonsById(id))}
        />
      </Link>
      </HeaderCreatePokemon>
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
      <Modal onClick={click} visible={infoCreatedModal}  className ="active">
              <div>
                  <h3>{msg}</h3>
              </div>
      </Modal>
    </ContainerCreated>
  );
};