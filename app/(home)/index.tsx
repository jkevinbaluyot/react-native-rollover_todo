import styles from '../styles.tsx';
import { View, Text } from 'react-native';
import { formatDate } from '../../utils/formatDate.js';
import { Button, Heading, Container } from "nes-ui-react";

function HomeScreen() {
  const todayDate = formatDate(new Date());

  return (
    <View style={styles.pageContainer}>
      <Heading dense size='xlarge'>Todos</Heading>

      <Container>
        <Button>Settings</Button>
      </Container>
      <Text style={styles.baseText}>Date: {todayDate}</Text>
    </View>
  );
}

export default HomeScreen
