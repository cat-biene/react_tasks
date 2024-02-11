import Img from "./components/Image";
import Button from "./components/Product";
import Student from "./components/Student";
import Title from "./components/Title";

function App() {
const imageUrl = 'src/media/React.png';
  return (
    <div>
      <Title title={'React'} />
      <Img imgUrl={imageUrl} />
      <Button title={'ADD'}/>
      <Student  firstName={'John'} lastName={'Doe'} grades={[10, 12, 10]}/>
      <Student  firstName={'Jane'} lastName={'Smith'} grades={[7, 5, 9]}/>
      <Student  firstName={'Alice'} lastName={'Johnson'} grades={[9, 9, 10]}/>    
    </div>
  );
}

export default App;