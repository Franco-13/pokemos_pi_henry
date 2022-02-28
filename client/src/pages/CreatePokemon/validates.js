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
  if (Number(input.hp)> 252) {
    errors.hp = "El valor vida no puede ser mayor a 252"
  }
  if (Number(input.attack)> 252) {
    errors.attack = "El valor ataque no puede ser mayor a 252"
  }
  if (Number(input.defense)> 252) {
    errors.defense = "El valor defensa no puede ser mayor a 252"
  }
  if (Number(input.speed) > 252) {
    errors.speed = "El valor velocidad no puede ser mayor a 252"
  }
  if (Number(input.height) > 100) {
    errors.height = "El valor altura no puede ser mayor a 100"
  }
  if (Number(input.weight) > 1000) {
    errors.weight = "El valor peso no puede ser mayor a 1000"
  }
  if (!validImg.test(input.image)) {
    errors.image = "La imagen debe ser '.jpg', '.jpeg', '.png' ó '.gif' "
  }
  return errors;
}