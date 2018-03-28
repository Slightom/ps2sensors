import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

var c = 14;

class MyChangingText extends Component {
  constructor(props) {
    super(props);
    this.state = { fsize: 14 };

    setInterval(() => {
      this.setState(previousState => {
        return { fsize: MyChangingText._calculateNewFontSize(previousState.fsize) }
      });
    }, 500);


    
  }

  static _calculateNewFontSize(prev) {
    if(prev > 32){
      return 14;
    } else{
      return prev + 2;
    }
  }

  render() {
    //let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={{ fontSize: this.state.fsize }}>{this.props.text}  {this.state.fsize}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {

    return (
      <View style={styles.mainWrap}>
        <View style={styles.headerBelt}></View>

        <View style={styles.container}>
          <MyChangingText text='have a little fun from react-native' />
        </View>
      </View>
    );
  }
}




// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBelt: {
    height: 25,
    backgroundColor: 'green',
  },
});
