import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class DetailsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }
  render() {
    return (
      <SafeAreaView style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.container}
        >
          {
            this.props.images?.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={style.image} />
            ))
          }
        </ScrollView>
        <View style={style.pagination}>
          {
            this.props.images?.map((i, k) => (
              <Text key={k} style={k == this.state.active ? style.pagingActiveText : style.pagingText}>.</Text>
            ))
          }
        </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width,
    height,
    alignSelf: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  image: { width, height, resizeMode: 'center' },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  pagingText: {
    fontSize: (width / 6),
    color: '#772CE8',
    margin: 3
  },
  pagingActiveText: {
    fontSize: (width / 6),
    color: '#ffffff',
    margin: 3
  }
})