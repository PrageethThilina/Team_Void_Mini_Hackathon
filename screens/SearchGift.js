import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

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

const SearchGift = ({ route, navigation }) => {
  const [category, setCategory] = useState(undefined)
  const [event, setEvent] = useState(undefined)
  return (
    <Container>
      <Header style={{ backgroundColor: '#cf0404' }}>
        <Left>
          <Button
            onPress={() => {
              navigation.goBack()
            }}
            transparent
          >
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Search Gift</Title>
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
        Search here...
      </Text>
      <Content style={{ marginTop: 40 }}>
        <Form style={{ alignContent: 'center' }}>
          <Label style={{ fontSize: 25, textAlign: 'center' }}>
            Gift Category
          </Label>
          <Item picker>
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='arrow-down' />}
              style={{ width: undefined }}
              placeholder='Select Category'
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor='#007aff'
              selectedValue={category}
              onValueChange={(value) => setCategory(value)}
            >
              <Picker.Item label='Clothes' value='key0' />
              <Picker.Item label='Ornaments' value='key1' />
              <Picker.Item label='Sweets' value='key2' />
              <Picker.Item label='Wearables' value='key3' />
              <Picker.Item label='Vouchers' value='key4' />
            </Picker>
          </Item>
          <Label style={{ fontSize: 25, textAlign: 'center' }}>Event</Label>
          <Item picker>
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='arrow-down' />}
              style={{ width: undefined }}
              placeholder='Select Category'
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor='#007aff'
              selectedValue={event}
              onValueChange={(value) => setEvent(value)}
            >
              <Picker.Item label='Birthday' value='key0' />
              <Picker.Item label='Wedding' value='key1' />
              <Picker.Item label='Date' value='key2' />
              <Picker.Item label='Anniversary' value='key3' />
              <Picker.Item label='Promotion' value='key4' />
            </Picker>
          </Item>
          <Label style={{ fontSize: 25, textAlign: 'center' }}>Age</Label>
          <Item>
            <Input />
          </Item>
          <Button
            rounded
            large
            dark
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigation.navigate('ViewGift')}
          >
            <Text>Search...</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default SearchGift
