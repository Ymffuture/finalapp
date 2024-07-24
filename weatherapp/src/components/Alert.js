import Alert from 'react-bootstrap/Alert';

function LinksExample() {
  return (
    <>
      {[
       
        'info'
     
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          API Updated 5 hours ago by{' '}
          <Alert.Link href="/">Future</Alert.Link>. 
        </Alert>
      ))}
    </>
  );
}

export default LinksExample;