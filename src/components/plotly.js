export const rand = ( min = 0, max = 1 ) => Math.random() * ( max - min ) + min;

export const linspace = ( start, end, n ) => {
  const arr = new Float32Array( n );
  const step = ( end - start ) / ( n - 1 );
  for ( let i = 0;i < n;i++ ) arr[ i ] = start + step * i;
  return arr;
};

export const initialise = ( samples, type = "scatter3d" ) => {
  let x, y, z;
  if ( type === "scatter3d" ) {
    x = new Float32Array( samples );
    y = new Float32Array( samples );
    z = new Float32Array( samples );
  }
  if ( type === "heatmap" ) {
    x = linspace( -1, 1, samples );
    y = linspace( -1, 1, samples );
    z = new Array( samples );
  }

  return [ x, y, z ];
}