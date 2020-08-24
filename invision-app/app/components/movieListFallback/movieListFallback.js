import React from 'react';

export function MovieListFallback(props){
    const styles = {
        background: 'white',
      };
      return ( 
        <div role="alert" style={styles}>
          <p>Can not get movies list:</p>
          <pre>{props.error.message}</pre>
          <pre>{props.componentStack}</pre>
          <button onClick={props.resetErrorBoundary}>Try again</button>
        </div>
      );
}