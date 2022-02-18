import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postPokemon } from "../actions";

export const CreatePokemo = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

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
  }, []); */

  const handleChange = (e) => {
    e.preventDefault(e)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeCheck = (e) => {
    e.preventDefault(e)
    if (e.target.checked) {
      setInput({
        ...input,
        types: [...input.types, e.target.value]
      })
    }else{
      setInput({
        ...input,
        types: [...input.types, e.target.value].pop()
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
   // dispatch(postPokemon(input));
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
      <Link to="/home">
        <button>Regresar</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e)=>handleChange(e)} type="text" name="name" value={input.name} />
        <input onChange={(e)=>handleChange(e)} type="text" name="image" value={input.image} />
        <input onChange={(e)=>handleChange(e)} type="number" name="hp" value={input.hp} />
        <input onChange={(e)=>handleChange(e)} type="number" name="attack" value={input.attack} />
        <input onChange={(e)=>handleChange(e)} type="number" name="defense" value={input.defense} />
        <input onChange={(e)=>handleChange(e)} type="number" name="speed" value={input.speed} />
        <input onChange={(e)=>handleChange(e)} type="number" name="height" value={input.height} />
        <input onChange={(e)=>handleChange(e)} type="number" name="weight" value={input.weight} />
        {types?.map((el) => (
          <label key={el.name}>
            <input onChange={(e)=>handleChangeCheck(e)} type="checkbox" name="types" value={el.name} />
            {el.name}
          </label>
        ))}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
