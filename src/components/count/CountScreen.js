import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

const style = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  count: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
  },
});

const CountScreen = props => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Poquemones atrapados</Text>
      <Text style={style.count}>{props.count.count}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, null)(CountScreen);
