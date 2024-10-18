/** @format */

import Header from "./Header"; // Assuming you have a Header component
import Container from "./Container"; // Assuming you have a Container component

export default function Custom404() {
  return (
    <>
      <Header />
      <Container>
        <div className='custom-404'>
          <h1>404 - Page Not Found</h1>
        </div>
      </Container>
    </>
  );
}
