import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const numStars= 5;

export default class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ratingNumber: this.props.ratingNumber ?? 1
    };
  }

  rate = star => {
      this.setState({ratingNumber: star})
  }

  render() {
      let stars = [];

      for(let x=1; x <= numStars; x++){
          stars.push(
              <View key={x}>
                  <Animated.View>
                      <Star filled = {x<= this.state.ratingNumber ? true: false}/>
                  </Animated.View>
              </View>             
          )
      }

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            {stars}
        </View>
      </View>
    );
  }

  
}

class Star extends React.Component{
    render(){
        return (
            <FontAwesome
            name={this.props.filled===true ? "star":"star-o"}
            color="#61DFFD"
            size={14}
            style={{marginHorizontal:6}}/>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
      
});

