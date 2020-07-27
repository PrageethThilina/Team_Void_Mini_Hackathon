import React from 'react'
import { View } from 'react-native'

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Spinner,
  List,
  ListItem,
} from 'native-base'

const Dashboard = ({ route, navigation }) => {
  return (
    <Container>
      <Header style={{ backgroundColor: '#cf0404' }}>
        <Body>
          <Title>Dashboard</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>

          <Button transparent>
            <Icon name='person' />
          </Button>
        </Right>
      </Header>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Search for a Gift...
      </Text>
      <Content style={{ marginTop: 40 }}>
        <List>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 25 }}>Previous Searches</Text>
            </Body>

            <Right>
              <Button style={{ backgroundColor: '#cf0404' }}>
                <Icon active name='arrow-forward' />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 25 }}>Most Searched Gifts</Text>
            </Body>

            <Right>
              <Button style={{ backgroundColor: '#cf0404' }}>
                <Icon active name='arrow-forward' />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 25 }}>Search gift</Text>
            </Body>

            <Right>
              <Button style={{ backgroundColor: '#cf0404' }}>
                <Icon active name='arrow-forward' />
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default Dashboard
