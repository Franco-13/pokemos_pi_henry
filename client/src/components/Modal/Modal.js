import React from 'react'
import { COLOR_RED_TRANSPARENT, YELLOW_PIKACHU } from '../../styles/global';
import { GlobalButton } from '../GlobalButton/GlobalButton';
import { ModalContainer } from './styles';

export const Modal = ({onClick, visible=false, modalMessage, buttons=false, onClickBtn1, onClickBtn2}) => {
  return (
    <ModalContainer onClick={onClick} visible={visible} className ="active">
      <div>
        <h3>{modalMessage}</h3>
        {
          buttons && 
          <section>
            <GlobalButton
              onClick={onClickBtn1}
              textBtn="SI"
              colorBtn={COLOR_RED_TRANSPARENT}
              fontColor="black"
              />
            <GlobalButton
              onClick={onClickBtn2}
              textBtn="NO"
              colorBtn={YELLOW_PIKACHU}
              fontColor="black"
            />
          </section>
        }
      </div>
    </ModalContainer>
  )
}
