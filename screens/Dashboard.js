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
          marginTop: 20,
        }}
      >
        Search for a Gift...
      </Text>
      <Content style={{ marginTop: 10 }}>
        <View style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              paddingTop: 30,
            }}
          >
            <Text style={{ fontSize: 15 }}>Privious Searches Count</Text>
            <Text
              style={{
                fontSize: 15,
                borderColor: 'black',
                borderWidth: 2,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              320
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
          >
            <Text style={{ fontSize: 15 }}>Registered Users Count</Text>
            <Text
              style={{
                fontSize: 15,
                borderColor: 'black',
                borderWidth: 2,
                borderWidth: 2,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              129
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
          >
            <Text style={{ fontSize: 15 }}>Most Search Age Range Count</Text>
            <Text
              style={{
                fontSize: 15,
                borderColor: 'black',
                borderWidth: 2,
                borderWidth: 2,
                paddingRight: 10,
                paddingLeft: 10,
              }}
            >
              20-30
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
          ></View>
        </View>
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
              <Button
                onPress={() => {
                  navigation.navigate('SearchGift')
                }}
                style={{ backgroundColor: '#cf0404' }}
              >
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
