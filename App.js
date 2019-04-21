import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';

// const width = Dimensions.get('window').width,

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      number: 20,
      numIndex: 7,
      entries: [],
      modal: false,
      selector: false
    }
  }
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        {
          <Text style={{ fontSize: 40, color: 'black' }}>{item}</Text>
        }
      </View>
    );
  }

  componentWillMount() {
    const { entries, number } = this.state

    for (var i = 1; i <= number; i++) {
      entries.push(i)
      this.setState({ entries })
    }
  }

  itemRender(index) {
    // console.log(index)
    this.setState({ numIndex: index })
  }

  openModel() {
    this.setState({ modal: true })
  }

  render() {
    const { selector, modal } = this.state
    return (
      !modal ?
        <View style={styles.container}>
          <View style={{
            // borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 10
          }}>
            <Text style={{
              fontSize: 38,
              fontWeight: '400',
              color: 'black'
            }}>
              {'выБерИте неоБхоДимое количество'} <Text onPress={() => this.openModel()} style={{ color: 'blue' }}>{selector ? 'студентов' : 'групп-'}</Text>
            </Text>
          </View>
          <View style={{
            // borderWidth: 1,
            width: '100%',
            alignSelf: 'center',
            paddingHorizontal: 25,
            paddingVertical: 15
          }}>
            <Text style={{ fontSize: 15 }}>
              {'Вы можете разбить студентов на нужное количество групп или человек'}
            </Text>
          </View>
          <View style={{ height: '25%' }}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              // sliderHeight={100}
              onSnapToItem={(index) => this.itemRender(index)}
              renderItem={this._renderItem}
              sliderWidth={500}
              itemWidth={110}
              activeSlideAlignment={'center'}
              activeSlideOffset={30}
              firstItem={7}
              containerCustomStyle={{ paddingTop: '20%' }}
              inactiveSlideOpacity={0.3}
              contentContainerStyle={{ alignItems: 'center', alignSelf: 'center' }}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={{ width: '90%', alignItems: 'center' }}>
              <View style={{
                width: '90%',
                paddingVertical: 15,
                backgroundColor: 'blue'
              }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  {'раздЕлить всЕх'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            width: '100%',
            paddingVertical: 15,
          }}>
            <Text style={{
              textAlign: 'center'
            }}>
              {'или'} <Text onPress={() => this.openModel()} style={{ color: 'blue' }}>{'раздЕлить только присутствующих'}</Text>
            </Text>
          </View>
        </View>
        :
        <View style={styles.selector}>
          <TouchableOpacity onPress={() => this.setState({ modal: false, selector: false })} activeOpacity={0.7} style={{ flexGrow: 1, width: '100%' }}>
            <View style={{
              flexGrow: 1,
              justifyContent: 'center',
              borderBottomWidth: 2,
              width: '100%',
              borderBottomColor: 'lightgrey'
            }}>
              <Text style={{ textAlign: 'center', fontSize: 30 }}>
                {'групп'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ modal: false, selector: true })} activeOpacity={0.7} style={{ flexGrow: 1, width: '100%' }}>
            <View style={{
              flexGrow: 1,
              justifyContent: 'center',
              width: '100%',
            }}>
              <Text style={{ textAlign: 'center', fontSize: 30 }}>
                {'студентов'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    // borderWidth: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  selector: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  widths: {
    width: Dimensions.get('window').width,
  }
})