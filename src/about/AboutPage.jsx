import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>about this project</h1>

        <p>this is a react app to leave feedback for a product or services</p>
        <p>version 2.2.0</p>

        <Link to='/'>Back to home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
