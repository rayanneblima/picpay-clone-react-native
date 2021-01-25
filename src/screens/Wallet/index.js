import React, { useState } from 'react';
import { StatusBar, Switch } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import { 
  StatusBarView, 
  Wrapper,
  Container,
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddContainer,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png'

function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return(
    <>
      <StatusBarView colors={useBalance ? ['#52e78c', '#52e78c'] : ['#d3d3d3', '#d3d3d3']}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      </StatusBarView>
      <Wrapper>
        <Container>
          <Header 
            colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
          >
            <HeaderContainer>
              <Title>Saldo PicPay</Title>

              <BalanceContainer>
                <Value>R$ <Bold>{isVisible ? "0,00" : "-----"}</Bold></Value>
                <EyeButton onPress={handleToggleVisibility}>
                  <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#fff" />
                </EyeButton>
              </BalanceContainer>

              <Info>Seu saldo está rendendo 100% do CDI</Info>
            
              <Actions>
                <Action>
                  <MaterialCommunityIcons name="cash" size={26} color="#fff" />
                  <ActionLabel>Adicionar</ActionLabel>
                </Action>
                <Action>
                  <FontAwesome name="bank" size={20} color="#fff" />
                  <ActionLabel>Retirar</ActionLabel>
                </Action>
              </Actions>
            </HeaderContainer>
          </Header>

          <UseBalance>
            <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
            <Switch trackColor={{true: '#1ab563', false: '#d3d3d3'}} thumbColor="#fff" value={useBalance} onValueChange={handleToggleUseBalance} />
          </UseBalance>

          <PaymentMethods>
            <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
            
            <Card>
              <CardBody>
                <CardDetails>
                  <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                  <CardInfo>Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
                </CardDetails>

                <Img source={creditCard} resizeMode="contain" />
              </CardBody>

              <AddContainer>
                <AddButton>
                  <AntDesign name="pluscircleo" size={30} color="#0db060" />
                </AddButton>
                <AddLabel>Adicionar cartão de crédito</AddLabel>
              </AddContainer>
            </Card>

            <UseTicketContainer>
              <UseTicketButton>
                <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
              </UseTicketButton>
              <UseTicketLabel>Usar código promocional</UseTicketLabel>
            </UseTicketContainer>
          </PaymentMethods>
 
        </Container>
      </Wrapper>
    </>
  );
}

export default Wallet;