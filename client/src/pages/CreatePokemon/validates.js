export function validateInputs(input) {
  let errors = {};
  let validImg = /^.*\.(jpg|jpeg|png|gif)$/;
  let validName = /^[a-zA-Z\s]+$/;
  
  if (!input.name.length) {
    errors.name = "Ingrese un nombre para el pokemon"
  } else if (!validName.test(input.name)) {
    errors.name = "El nombre solo debe contener letras"
  }
  if (input.types.length > 2) {
    errors.types = "Solo puede asignar hasta dos tipos"
  }
  if (Number(input.hp)> 252 || Number(input.hp)< 0) {
    errors.hp = "El valor vida debe estar entre 0 y 252"
  }
  if (Number(input.attack)> 252 || Number(input.attack)< 0) {
    errors.attack = "El valor ataque debe estar entre 0 y 252"
  }
  if (Number(input.defense)> 252 || Number(input.defense)< 0) {
    errors.defense = "El valor defensa debe estar entre 0 y 252"
  }
  if (Number(input.speed) > 252 || Number(input.speed)< 0) {
    errors.speed = "El valor velocidad debe estar entre 0 y 252"
  }
  if (Number(input.height) > 100 || Number(input.height)< 0) {
    errors.height = "El valor altura debe estar entre 0 y 100"
  }
  if (Number(input.weight) > 1000 || Number(input.weight)< 0) {
    errors.weight = "El valor peso debe estar entre 0 y 1000"
  }
  if (!validImg.test(input.image)) {
    errors.image = "La imagen debe ser '.jpg', '.jpeg', '.png' ó '.gif' "
  }
  return errors;
}