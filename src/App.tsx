import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A link</Button>
      </p>
      <p>
        <Container component='button'>Hello</Container>
      </p>
    </main>
  );
}

export default App;
