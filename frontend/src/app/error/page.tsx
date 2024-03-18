'use client';

import Container from "../_layout/Container";

const ErrorPage = () => {
  return (
    <Container>
      <div className="pt-4 mt-4 text-center">
        <h2>Error 500. Oops, something went wrong</h2>
        <h3>The server encountered an error and could not complete your request.</h3>
      </div>
    </Container>
  );
}

export default ErrorPage;
