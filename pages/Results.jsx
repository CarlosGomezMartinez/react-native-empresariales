import { Text} from 'react-native';

const Results = ({ navigation, route }) => {
  return <Text>This is the value to search: {route.params}</Text>;
};

export default Results;