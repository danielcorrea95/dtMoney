import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactonModal: () => void;
}

export function Header({ onOpenNewTransactonModal } : HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>

        <button type="button" 
          onClick={onOpenNewTransactonModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}