import { useRef } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';

function App() {
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input id='name' label='Your name' type='text' />
        <Input id='age' label='Your age' type='number' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
