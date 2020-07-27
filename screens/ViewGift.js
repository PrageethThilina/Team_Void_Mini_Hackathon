import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { Image } from 'react-native'

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
  Card,
  CardItem,
  Thumbnail,
} from 'native-base'

const ViewGift = ({ route, navigation }) => {
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
          <Title>Gifts</Title>
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
        Here are some Suggestions...
      </Text>
      <Content style={{ marginTop: 40 }}>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Mens Top</Text>
                <Text note>Back Mens Top</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://5.imimg.com/data5/YE/OG/MY-60805838/men-s-full-sleeves-t-shirt-500x500.jpg',
              }}
              style={{ height: 300, width: 300, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name='cart' />
                <Text>1000/=</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>More</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Mens Watch</Text>
                <Text note>SKMEI branded mens watch</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/FD/28/e26ee5e8-9e74-4251-9570-863ead83555c.jpg',
              }}
              style={{ height: 300, width: 300, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name='cart' />
                <Text>4700/=</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>More</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Perfume</Text>
                <Text note>Dark Sensational Mens Perfume</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'data:image/jpeg;base64,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',
              }}
              style={{ height: 300, width: 300, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name='cart' />
                <Text>2500/=</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>More</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

export default ViewGift
