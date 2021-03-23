import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    margin: 15
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  createrContainer: {
    flexDirection: 'row',
    margin: 10
  },
  by: {
    color: 'lightgray',
    fontSize: 20,
    margin: 5
  },
  numberOfLikes: {
    color: 'lightgray',
    fontSize: 20,
    margin: 5
  },
  button: {
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CD05D',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;